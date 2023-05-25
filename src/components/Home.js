// Importing necessary React, Material-UI components and framer-motion
import React, { useEffect, useState } from 'react';
import { Container, Typography as MuiTypography, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

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

// TestimonialCard: Custom Card component for testimonials
const TestimonialCard = styled(Card)(({ theme }) => ({
  width: '100%', // This sets the width to 90% of its parent's width
  [theme.breakpoints.up('md')]: {
    width: '100%', // This sets the width to 60% of its parent's width on medium screens and up
  },
  margin: theme.spacing(2),
}));

// TestimonialText: Custom typography for the testimonial text
const TestimonialText = styled(MuiTypography)(({ theme }) => ({
  fontStyle: 'italic',
}));

// TestimonialAuthor: Custom typography for the testimonial author
const TestimonialAuthor = styled(MuiTypography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'right',
}));

// VisitorCounterText: Custom typography for visitor count text
const VisitorCounterText = styled(motion(MuiTypography))(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

// Home component
function Home({ visitorCount }) {
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

  // Testimonials data
  const testimonials = [
    { text: 'Good job', author: 'A group project member' },
    { text: 'A pleasure to have in class.', author: 'Grade 8 social studies teacher' },
    { text: 'A very sweet boy.', author: 'My Mom' },
  ];

  // Framer Motion variants for testimonials animation
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3, 
      },
    }),
  };

  // Framer Motion variants for visitor count animation
  const counterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
  };

  return (
    <HomeWrapper>
      {/* Welcome text with typing effect */}
      <WelcomeText color="text.primary" className={textIndex < text.length ? 'typing' : ''}>
        {text.slice(0, textIndex)}
      </WelcomeText>
      
      {/* Personal information and links */}
      <Typography color="text.primary">
        Check out my resume <a href="https://inefy.github.io/resume/">here</a> 
        &nbsp;and see the latex file it was built from <a href="https://github.com/Inefy/resume">here</a>.
      </Typography>
      <Typography color="text.primary">Finishing up my Computer Science degree at Memorial University.</Typography>
      <Typography color="text.primary">Currently studying for my AWS Cloud Practitioner Certification.</Typography>
      <Typography color="text.primary">From St.John's, Newfoundland.</Typography>
      <Typography color="text.primary">I like building things.</Typography>
      <h1>Testimonials</h1>

      {/* Testimonials */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {testimonials.map((testimonial, i) => (
          <TestimonialCard
            component={motion.div}
            variants={testimonialVariants}
            initial="hidden"
            animate="visible"
            custom={i} 
            key={i}
          >
            <CardContent>
              <TestimonialText variant="body1" color="text.primary" gutterBottom>
                "{testimonial.text}"
              </TestimonialText>
              <TestimonialAuthor variant="body2" color="text.secondary">
                - {testimonial.author}
              </TestimonialAuthor>
            </CardContent>
          </TestimonialCard>
        ))}
      </Box>

      {/* Visitor Counter */}
      <VisitorCounterText variant="h6" component={motion.div} variants={counterVariants} initial="hidden" animate="visible">
        Visits: {visitorCount}
      </VisitorCounterText>
    </HomeWrapper>
  );
}

// Export Home component as default
export default Home;
