import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
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
            <div>
              <NavigationLink to="/">
                <Typography variant="h6">Home</Typography>
              </NavigationLink>
              <NavigationLink to="/portfolio">
                <Typography variant="h6">Portfolio</Typography>
              </NavigationLink>
            </div>
            <div>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="GitHub"
                onClick={() => window.open('https://github.com/Inefy', '_blank')}
              >
                <GitHubIcon />
              </IconButton>
            </div>
          </StyledToolbar>
        </StyledAppBar>
        <Container>
          <div className="App-content">
            <Routes>
              <Route path="/" element={<Home />} index />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;