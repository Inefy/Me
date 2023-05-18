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
  '&.typing': {
    borderRight: '.15em solid',
    animation: '$cursor 0.75s step-end infinite',
  },
  '@keyframes cursor': {
    '50%': { borderColor: 'transparent' },
  },
}));

function Home() {
  const text = "hello, i'm zac.";
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < text.length) {
      const timer = setTimeout(() => {
        setTextIndex((prevTextIndex) => prevTextIndex + 1);
      }, 125); // delay for typing speed
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  return (
    <HomeWrapper>
      <WelcomeText color="text.primary" className={textIndex < text.length ? 'typing' : ''}>
        {text.slice(0, textIndex)}
      </WelcomeText>
      <Typography color="text.primary">
        Finishing up my Computer Science degree at Memorial Univeristy of Newfoundland.
      </Typography>
    </HomeWrapper>
  );
}

export default Home;
