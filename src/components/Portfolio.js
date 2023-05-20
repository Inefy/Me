import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';

// Importing images
import websiteImage from './pics/applehealth.png';
import appleHealthImage from './pics/applehealth.png';
import museGenImage from './pics/starcraft.jpg';
import sc2Image from './pics/midi.png';

// Custom styled CardContent component for setting the fixed height and layout.
const FixedHeightCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

// Custom styled Card component for setting border, shadow, transition, and hover effects.
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  '&:hover': {
    boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  },
}));

const Portfolio = () => {
  // Projects data
  const projects = [
    {
      name: 'This website',
      description: 'Just my own personal website to showcase my projects and skills.',
      technologies: ['React', 'Material-UI', 'Framer Motion'],
      repoLink: 'https://github.com/Inefy/personalsite',
      imagePath: websiteImage,
    },
    {
      name: 'Apple Health Visualizer',
      description: 'Takes data from the Apple Health app and visualizes it.',
      technologies: ['Python', 'Pandas'],
      repoLink: 'https://github.com/Inefy/AppleHealthVisualizer',
      imagePath: appleHealthImage,
    },
    {
      name: 'MuseGenAI',
      description: 'An AI-powered app that generates music notation and converts it into a MIDI file.',
      technologies: ['Python', 'Flask', 'React.js', 'OpenAI API', 'PrettyMIDI'],
      repoLink: 'https://github.com/Inefy/MuseGenAI',
      imagePath: museGenImage,
    },
    {
      name: 'SC2AI',
      description: 'A StarCraft II AI must be trained to become the very best(like no one ever was).',
      technologies: ['Python', 'TensorFlow', 'PySC2'],
      repoLink: 'https://github.com/Inefy/sc2Bot',
      imagePath: sc2Image,
    },
  ];

  // Framer Motion settings for hiding and showing components.
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Framer Motion settings for transition effects.
  const transition = {
    duration: 0.5,
    delay: 0.3,
    ease: 'easeInOut',
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        What I've been working on
      </Typography>
      <Grid container spacing={4}>
        {/* Mapping through the projects array to render each project's information. */}
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ...transition, delay: transition.delay * (index + 1) }}
            >
              <StyledCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.imagePath}
                  alt={project.name}
                />
                <FixedHeightCardContent>
                  <div>
                    <Typography variant="h5">{project.name}</Typography>
                    <Typography variant="body1">{project.description}</Typography>
                    <Typography variant="subtitle1">
                      Technologies: {project.technologies.join(', ')}
                    </Typography>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ marginTop: '1rem' }}
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                </FixedHeightCardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Portfolio;
