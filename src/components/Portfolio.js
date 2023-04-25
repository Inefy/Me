import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

// Styled components for fixed-height CardContent and custom Card
const FixedHeightCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '260px',
  borderRadius: '15px',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  '&:hover': {
    boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  },
}));

const Portfolio = () => {
  // Array of project objects
  const projects = [
    {
      name: 'This website',
      description: 'Just my own personal website to showcase my projects and skills.',
      technologies: ['React', 'Material-UI', 'Framer Motion'],
      repoLink: 'https://github.com/Inefy/personalsite',
    },
    {
      name: 'Apple Health Visualizer',
      description: 'Takes data from the Apple Health app and visualizes it.',
      technologies: ['Python', 'Pandas'],
      repoLink: 'https://github.com/Inefy/AppleHealthVisualizer',
    },
  ];

  // Framer Motion variants for hidden and visible states
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Framer Motion transition settings
  const transition = {
    duration: 0.5,
    delay: 0.3,
    ease: 'easeInOut',
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ...transition, delay: transition.delay * (index + 1) }}
            >
              <StyledCard>
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

