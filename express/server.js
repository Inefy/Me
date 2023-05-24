const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const { MongoDB } = require('../src/config');

const app = express();

app.use(cors());

// Connect to MongoDB database
mongoose.connect(MongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define schema and model for 'visits' collection
const visitSchema = new mongoose.Schema({
  visitCount: Number
});

const Visit = mongoose.model('Visit', visitSchema, 'visits');

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../build')));

app.get('/visitors', async (req, res) => {
  try {
    let visitorCountDoc = await Visit.findOne({});

    if (visitorCountDoc) {
      visitorCountDoc.visitCount++;
      await visitorCountDoc.save();
    } else {
      visitorCountDoc = new Visit({ visitCount: 1 });
      await visitorCountDoc.save();
    }

    res.status(200).json({ visitorCount: visitorCountDoc.visitCount });
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
