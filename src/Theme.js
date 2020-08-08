import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  dark: {
    colors: {
      primary: 'hsl(217, 90%, 61%)',
      dark: 'hsl(217, 13%, 19%)'
    }
  },
  light: {
    colors: {
      primary: 'hsl(100, 90%, 21%)',
      dark: 'hsl(217, 13%, 19%)'
    }
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

