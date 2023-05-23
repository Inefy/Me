const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../build')));

let visitorCount = 0;

app.get('/visitors', (req, res) => {
    visitorCount++;
    res.status(200).send({visitorCount});
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
