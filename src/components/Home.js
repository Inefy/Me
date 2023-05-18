import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

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
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  borderRight: '.15em solid',
  animation: '$cursor 0.75s step-end infinite',
  '@keyframes cursor': {
    '50%': { borderColor: 'transparent' },
  },
}));

function Home() {
  const text = "hello, i'm zac.";
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextIndex((prevTextIndex) => prevTextIndex + 1);
    }, 150); // delay for typing speed
    return () => clearTimeout(timer);
  }, [textIndex]);

  return (
    <HomeWrapper>
      <WelcomeText color="text.primary">
        {text.slice(0, textIndex)}
      </WelcomeText>
      <Typography color="text.primary">
        Explore my projects and get in touch if you're interested in collaborating.
      </Typography>
    </HomeWrapper>
  );
}

export default Home;
