// Importing necessary React and Material-UI components
import React, { useEffect, useState } from 'react';
import { Container, Typography as MuiTypography } from '@mui/material';
import { styled } from '@mui/system';

// HomeWrapper: Main wrapper container with custom styles
const HomeWrapper = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: 'calc(100vh - 64px)', // Full viewport height minus navbar height
}));

// WelcomeText: Custom typography for welcome text with typing animation
const WelcomeText = styled(MuiTypography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  '&.typing': { // Typing effect animation
    borderRight: '.15em solid',
    animation: '$cursor 0.75s step-end infinite',
  },
  '@keyframes cursor': {
    '50%': { borderColor: 'transparent' },
  },
}));

// Typography: Custom typography with additional bottom spacing
const Typography = styled(MuiTypography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 100,
  marginBottom: theme.spacing(2),
}));

// Home component
function Home() {
  const text = "hello, i'm zac.";
  const [textIndex, setTextIndex] = useState(0);

  // useEffect hook for typing effect
  useEffect(() => {
    if (textIndex < text.length) {
      // Timer to simulate typing speed
      const timer = setTimeout(() => {
        setTextIndex((prevTextIndex) => prevTextIndex + 1);
      }, 125);
      // Cleanup function to clear timer
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  return (
    <HomeWrapper>
      {/* Welcome text with typing effect */}
      <WelcomeText color="text.primary" className={textIndex < text.length ? 'typing' : ''}>
        {text.slice(0, textIndex)}
      </WelcomeText>
      
      {/* Personal information and links */}
      <Typography color="text.primary">From St.John's, Newfoundland.</Typography>
      <Typography color="text.primary">Finishing up my Computer Science degree at Memorial University.</Typography>
      <Typography color="text.primary">I like building things.</Typography>
      <Typography color="text.primary">Caffeine dependent.</Typography>
      <Typography color="text.primary">
        Check out my resume <a href="https://inefy.github.io/resume/">here</a> 
        &nbsp;and see the latex file it was built from <a href="https://github.com/Inefy/resume">here</a>.
      </Typography>
    </HomeWrapper>
  );
}

// Export Home component as default
export default Home;
