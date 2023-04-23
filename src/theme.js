import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Add custom properties and overrides here
  palette: {
    primary: {
      main: '#3f51b5', // You can change this value to your desired primary color
    },
    secondary: {
      main: '#f50057', // You can change this value to your desired secondary color
    },
  },
  typography: {
    // Add custom typography options here
  },
});

export default theme;
