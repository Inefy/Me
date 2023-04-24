import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Portfolio = () => {
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

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

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
              <Card>
                <CardContent>
                  <Typography variant="h5">{project.name}</Typography>
                  <Typography variant="body1">{project.description}</Typography>
                  <Typography variant="subtitle1">
                    Technologies: {project.technologies.join(', ')}
                  </Typography>
                  <Typography variant="body2">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Portfolio;
