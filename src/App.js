import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { AppBar, Toolbar, Typography, Container, IconButton, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { GitHub, LinkedIn } from '@mui/icons-material';
import './App.css';

function App() {
  const theme = useTheme();

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
    color: theme.palette.common.white,
    margin: theme.spacing(0, 2),
  });

  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
