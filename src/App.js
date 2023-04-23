import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { AppBar, Toolbar, Typography, Container, IconButton, Box, CssBaseline } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import { GitHub, LinkedIn, Brightness4, Brightness7 } from '@mui/icons-material';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#212121' : '#3f51b5',
      },
    },
  });

  const AppWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    textAlign: 'center',
  }));

  const StyledAppBar = styled(AppBar)({
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
  });

  const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
  });

  const NavigationLink = styled(Link)({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    margin: theme.spacing(0, 2),
  });

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppWrapper>
          <StyledAppBar position="static">
            <StyledToolbar>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NavigationLink to="/">
                  <Typography variant="h6">Home</Typography>
                </NavigationLink>
                <NavigationLink to="/portfolio">
                  <Typography variant="h6">Portfolio</Typography>
                </NavigationLink>
                <NavigationLink to="/contact">
                  <Typography variant="h6">Contact</Typography>
                </NavigationLink>
              </Box>
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
              <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Container>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}
export default App;


