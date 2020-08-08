const lightTheme = {
  mode: 'light',
  colors: {
    primary: 'hsl(217, 90%, 61%)',
    primaryDark: 'hsl(217, 90%, 41%)',
    dark: 'hsl(217, 13%, 19%)',
    dark100: 'hsl(217, 13%, 14%)',
    light: 'hsl(0, 0%, 100%)'
  }
};

lightTheme.colors.background = lightTheme.colors.dark;

const darkTheme = {
  mode: 'dark',
  colors: {
    primary: 'hsl(266, 91%, 54%)',
    primaryDark: 'hsl(266, 91%, 34%)',
    dark: 'hsl(341, 13%, 51%)',
    dark200: 'hsl(341, 13%, 91%)',
    light: 'hsl(0, 0%, 100%)'
  }
}

darkTheme.colors.background = darkTheme.colors.light;

export { lightTheme, darkTheme };
