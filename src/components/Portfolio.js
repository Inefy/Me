import React from 'react';
import { Card, CardContent, Typography, Grid, Button, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

// Importing images
import websiteImage from './pics/website.png';
import appleHealthImage from './pics/applehealth.png';
import museGenImage from './pics/midi.png';
import sc2Image from './pics/starcraft.jpg';

// Custom styled CardContent component for setting the fixed height and layout.
const FixedHeightCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: '1 0 auto', // allows the content to shrink if needed
}));

// Styled container for the button
const ButtonContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

// Custom styled Card component for setting border, shadow, transition, and hover effects.
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
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
      description: 'Just my own personal website to showcase me and my projects.',
      technologies: ['React', 'Material-UI', 'Framer Motion'],
      repoLink: 'https://github.com/Inefy/personalsite',
      imagePath: websiteImage,
      altText: 'Screenshot of personal website',
    },
    {
      name: 'MuseGenAI',
      description: 'An AI-powered app that generates music notation and converts it into a MIDI file.',
      technologies: ['Flask', 'React.js', 'Node.js', 'OpenAI API'],
      repoLink: 'https://github.com/Inefy/MuseGenAI',
      imagePath: museGenImage,
      altText: 'Screenshot of MuseGenAI application',
    },
    {
      name: 'NovaStar',
      description: 'A StarCraft II AI must be trained to become the very best(like no one ever was).',
      technologies: ['TensorFlow', 'Python', 'PySC2'],
      repoLink: 'https://github.com/Inefy/NovaStar',
      imagePath: sc2Image,
      altText: 'Screenshot of NovaStar application',
    },
    {
      name: 'Apple Health Visualizer',
      description: 'Takes data from the Apple Health app and visualizes it.',
      technologies: ['Pandas', 'Python'],
      repoLink: 'https://github.com/Inefy/AppleHealthVisualizer',
      imagePath: appleHealthImage,
      altText: 'Screenshot of Apple Health Visualizer application',
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
                  height="250"
                  image={project.imagePath}
                  alt={project.name}
                />
                <FixedHeightCardContent>
                    <Typography variant="h5">{project.name}</Typography>
                    <Typography variant="body1">{project.description}</Typography>
                    <Typography variant="subtitle1">
                      Technologies: {project.technologies.join(', ')}
                    </Typography>
                </FixedHeightCardContent>
                <ButtonContainer>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                </ButtonContainer>
              </StyledCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Portfolio;
