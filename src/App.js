// Importing necessary React and Material-UI components
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, IconButton, Box, CssBaseline } from '@mui/material';
import { GitHub, LinkedIn, Brightness4, Brightness7 } from '@mui/icons-material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

// Importing custom components
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import PaintPage from './components/paintapp/PaintPage';

// Importing theme configuration
import theme from './theme';

function App() {
  // State to manage dark/light mode
  const [darkMode, setDarkMode] = useState(false);

  // AppWrapper: Main wrapper container with custom styles
  const AppWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    textAlign: 'center',
  }));

  // StyledAppBar: Custom AppBar component with motion 
  const StyledAppBar = styled(motion(AppBar))({
    boxShadow: 'none',
  });

  // StyledToolbar: Custom Toolbar component with justified space 
  const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    padding: (theme) => theme.spacing(0, 2),
  });

  // NavigationLink: Custom Link component with removed decoration
  const NavigationLink = styled(Link)({
    textDecoration: 'none',
  });

  // Function to handle dark/light mode toggle
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Framer motion variants for AppBar animation
  const appBarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <CssBaseline />
      <Router>
        <AppWrapper>
          {/* AppBar with motion */}
          <StyledAppBar
            position="static"
            sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
            variants={appBarVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Toolbar with navigation links and utility buttons */}
            <StyledToolbar>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Navigation Links */}
                <NavigationLink to="/"><Typography variant="h6" sx={{ color: (theme) => theme.palette.text.primary, margin: (theme) => theme.spacing(0, 2) }}>Home</Typography></NavigationLink>
                <NavigationLink to="/portfolio"><Typography variant="h6" sx={{ color: (theme) => theme.palette.text.primary, margin: (theme) => theme.spacing(0, 2) }}>Portfolio</Typography></NavigationLink>
                <NavigationLink to="/contact"><Typography variant="h6" sx={{ color: (theme) => theme.palette.text.primary, margin: (theme) => theme.spacing(0, 2) }}>Contact</Typography></NavigationLink>
              </Box>
              {/* Utility Buttons */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Dark Mode Toggle Button */}
                <IconButton onClick={handleDarkModeToggle} sx={{ color: 'common.white' }}>{darkMode ? <Brightness7 /> : <Brightness4 />}</IconButton>
                {/* GitHub Profile Link */}
                <IconButton href="https://github.com/Inefy" target="_blank" rel="noopener" aria-label="github" sx={{ color: 'common.white' }}><GitHub /></IconButton>
                {/* LinkedIn Profile Link */}
                <IconButton href="https://www.linkedin.com/in/zac-batten/" target="_blank" rel="noopener" aria-label="linkedin" sx={{ color: 'common.white' }}><LinkedIn /></IconButton>
              </Box>
            </StyledToolbar>
          </StyledAppBar>
          {/* Main Content */}
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

// Export App component as default
export default App;
