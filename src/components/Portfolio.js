import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'A brief description of Project 1.',
      technologies: ['React', 'Node.js'],
      repoLink: 'https://github.com/yourusername/project1',
    },
    {
      name: 'Project 2',
      description: 'A brief description of Project 2.',
      technologies: ['Python', 'Django'],
      repoLink: 'https://github.com/yourusername/project2',
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
