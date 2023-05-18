import { createTheme } from '@mui/material/styles';

const theme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#212121' : '#3f51b5',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#d81b60',
      },
      background: {
        default: darkMode ? '#121212' : '#F8F8FF',  // Off-white color for light mode
      },
    },
      typography: {
        fontFamily: '"Roboto Mono", monospace',
      },
  });

export default theme;