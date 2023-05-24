import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, IconButton, Box, CssBaseline, ListItemIcon } from '@mui/material';
import { GitHub, LinkedIn, Brightness4, Brightness7, Home as HomeIcon, Work as PortfolioIcon, Mail as ContactIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import PaintPage from './components/paintapp/PaintPage';

import theme from './theme';

const { SERVER_IP } = require('./config');

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch(`${SERVER_IP}/visitors`)
    .then(response => response.json())
    .then(data => setVisitorCount(data.visitorCount));
  }, []);

  const AppWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    textAlign: 'center',
  }));

  const StyledAppBar = styled(motion(AppBar))({
    boxShadow: 'none',
  });

  const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    padding: (theme) => theme.spacing(0, 2),
  });

  const NavigationLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    margin: (theme) => theme.spacing(0, 2),
    '&:hover': {
      color: 'common.yellow',
      textDecoration: 'underline',
    },
  });

  const StyledIconButton = styled(IconButton)({
    color: 'common.white',
    '&:hover': {
      color: 'common.yellow',
    },
  });

  const MotionContainer = styled(motion(Container))({
    transition: "all 0.3s ease-in-out",
  });

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const appBarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <CssBaseline />
      <Router>
        <AppWrapper>
          <StyledAppBar
            position="static"
            sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
            variants={appBarVariants}
            initial="hidden"
            animate="visible"
          >
            <StyledToolbar>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NavigationLink to="/">
                  <Typography variant="h6">Home</Typography>
                  <ListItemIcon><HomeIcon sx={{ color: 'common.white' }} /></ListItemIcon>
                </NavigationLink>
                <NavigationLink to="/portfolio">
                  <Typography variant="h6">Portfolio</Typography>
                  <ListItemIcon><PortfolioIcon sx={{ color: 'common.white' }} /></ListItemIcon>
                </NavigationLink>
                <NavigationLink to="/contact">
                  <Typography variant="h6">Contact</Typography>
                  <ListItemIcon><ContactIcon sx={{ color: 'common.white' }} /></ListItemIcon>
                </NavigationLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <StyledIconButton onClick={handleDarkModeToggle}>{darkMode ? <Brightness7 sx={{ color: 'common.white' }} /> : <Brightness4 sx={{ color: 'common.white' }} />}</StyledIconButton>
                <StyledIconButton href="https://github.com/Inefy" target="_blank" rel="noopener" aria-label="github"><GitHub sx={{ color: 'common.white' }} /></StyledIconButton>
                <StyledIconButton href="https://www.linkedin.com/in/zac-batten/" target="_blank" rel="noopener" aria-label="linkedin"><LinkedIn sx={{ color: 'common.white' }} /></StyledIconButton>
              </Box>
            </StyledToolbar>
          </StyledAppBar>
          <Routes>
            <Route path="/" element={<MotionContainer variants={pageVariants} initial="hidden" animate="visible"><Home visitorCount={visitorCount} /></MotionContainer>} />
            <Route path="/portfolio" element={<MotionContainer variants={pageVariants} initial="hidden" animate="visible"><Portfolio /></MotionContainer>} />
            <Route path="/contact" element={<MotionContainer variants={pageVariants} initial="hidden" animate="visible"><Contact /></MotionContainer>} />
            <Route path="/paint" element={<MotionContainer variants={pageVariants} initial="hidden" animate="visible"><PaintPage /></MotionContainer>} />
          </Routes>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
