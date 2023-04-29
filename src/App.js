import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import PaintingCanvas from './components/PaintingCanvas';
import { AppBar, Toolbar, Typography, Container, IconButton, Box, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { GitHub, LinkedIn, Brightness4, Brightness7 } from '@mui/icons-material';
import theme from './theme';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Styled components for AppWrapper, StyledAppBar, StyledToolbar, and NavigationLink
  const AppWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    textAlign: 'center',
  }));

  const StyledAppBar = styled(AppBar)({
    boxShadow: 'none',
  });

  const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    padding: (theme) => theme.spacing(0, 2),
  });

  const NavigationLink = styled(Link)({
    textDecoration: 'none',
  });

  // Function to toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <CssBaseline />
      <Router>
        <AppWrapper>
          <StyledAppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
            <StyledToolbar>
              {/*  Navigation links section */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NavigationLink to="/">
                  <Typography variant="h6" sx={{ color: (theme) => theme.palette.text.primary, margin: (theme) => theme.spacing(0, 2) }}>
                    Home
                  </Typography>
                </NavigationLink>
                <NavigationLink to="/portfolio">
                  <Typography variant="h6" sx={{ color: (theme) => theme.palette.text.primary, margin: (theme) => theme.spacing(0, 2) }}>
                    Portfolio
                  </Typography>
                </NavigationLink>
                <NavigationLink to="/contact">
                  <Typography variant="h6" sx={{ color: (theme) => theme.palette.text.primary, margin: (theme) => theme.spacing(0, 2) }}>
                    Contact
                  </Typography>
                </NavigationLink>
                <NavigationLink to="/paint">
                  <Typography variant="h6" sx={{ color: (theme) => theme.palette.text.primary, margin: (theme) => theme.spacing(0, 2) }}>
                    Paint
                  </Typography>
                </NavigationLink>
              </Box>
              {/* Social icons and dark mode toggle section */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={handleDarkModeToggle}
                  sx={{ color: 'common.white' }}
                >
                  {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <IconButton
                  href="https://github.com/Inefy"
                  target="_blank"
                  rel="noopener"
                  aria-label="github"
                  sx={{ color: 'common.white' }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/zac-batten/"
                  target="_blank"
                  rel="noopener"
                  aria-label="linkedin"
                  sx={{ color: 'common.white' }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </StyledToolbar>
          </StyledAppBar>
          <Container>
            <div className="App-content">
              {/*  Routes for different pages */}
              <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/paint" element={<PaintingCanvas />} />
              </Routes>
            </div>
          </Container>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
