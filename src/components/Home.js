import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for HomeWrapper and WelcomeText
const HomeWrapper = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: 'calc(100vh - 64px)',
}));

const WelcomeText = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

function Home() {
  return (
    // HomeWrapper contains the entire content of the home page
    <HomeWrapper>
      {/* WelcomeText displays the main welcome message */}
      <WelcomeText color="text.primary">Welcome to my portfolio!</WelcomeText>
      {/*  Typography component for the additional text below the welcome message */}
      <Typography color="text.primary">
        Explore my projects and get in touch if you're interested in collaborating.
      </Typography>
    </HomeWrapper>
  );
}

export default Home;
