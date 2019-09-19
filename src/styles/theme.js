const baseFonts = [
  'Manjari',
  'Open Sans',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
];

export default {
  palette: {
    primary: {
      lighter: '#FFCF74',
      light: '#EDDA99',
      main: '#FDB01F',
      dark: '#D48C02',
      darker: '#A76D00',
    },
    secondary: {
      lighter: '#7E6ACC',
      light: '#5E45B9',
      main: '#4428AE',
      dark: '#2D1392',
      darker: '#220C73',
    },
    tertiary: {
      lighter: '#6f6f6f',
      light: '#595959',
      main: '#444444',
      dark: '#2a2a2a',
      darker: '#101010',
    },
  },
  typography: {
    base: {
      fontFamily: baseFonts.join(','),
    },
    title: {
      fontFamily: [...baseFonts].join(','),
    },
  },
};
