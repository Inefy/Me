// Importing necessary React and Material-UI components
import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

// FixedHeightCardContent: Custom CardContent component with fixed height and spacing
const FixedHeightCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '260px',
  borderRadius: '15px',
}));

// StyledCard: Custom Card component with rounded corners and transition effects
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
    //...
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
        what i've been working on
      </Typography>
      <Grid container spacing={4}>
        {/* Iterating over the projects array */}
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {/* Using motion component for smooth animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ...transition, delay: transition.delay * (index + 1) }}
            >
              {/* Project Card */}
              <StyledCard>
                <FixedHeightCardContent>
                  <div>
                    <Typography variant="h5">{project.name}</Typography>
                    <Typography variant="body1">{project.description}</Typography>
                    <Typography variant="subtitle1">
                      Technologies: {project.technologies.join(', ')}
                    </Typography>
                  </div>
                  {/* GitHub Project Link */}
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

// Export Portfolio component as default
export default Portfolio;
