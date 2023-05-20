import React, { useState } from 'react';
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

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
  });

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const appBarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
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
                <IconButton onClick={handleDarkModeToggle} sx={{ color: 'common.white' }}>{darkMode ? <Brightness7 /> : <Brightness4 />}</IconButton>
                <IconButton href="https://github.com/Inefy" target="_blank" rel="noopener" aria-label="github" sx={{ color: 'common.white' }}><GitHub /></IconButton>
                <IconButton href="https://www.linkedin.com/in/zac-batten/" target="_blank" rel="noopener" aria-label="linkedin" sx={{ color: 'common.white' }}><LinkedIn /></IconButton>
              </Box>
            </StyledToolbar>
          </StyledAppBar>
          <Container>
            <div className="App-content">
              <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/paint" element={<PaintPage />} />
              </Routes>
            </div>
          </Container>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
