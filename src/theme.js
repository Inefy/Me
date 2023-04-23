import { createTheme } from '@mui/material/styles';

const theme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#212121' : '#3f51b5',
      },
    },
  });

export default theme;