import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const HomeWrapper = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: 'calc(100vh - 64px)',
}));

const WelcomeText = styled(motion(Typography))(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

function Home() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };

  return (
    <HomeWrapper>
      <WelcomeText
        color="text.primary"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Welcome to my portfolio!
      </WelcomeText>
      <Typography color="text.primary">
        Explore my projects and get in touch if you're interested in collaborating.
      </Typography>
    </HomeWrapper>
  );
}

export default Home;