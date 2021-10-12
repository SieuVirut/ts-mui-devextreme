import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    textDanger: string;
    danger: string;
    error: string;
    warning: string;
    popBackground: string;
    modalBackground: string;
    mainFontFamily: string;
    seconFontFamily: string;
    borderPrimaryColor: string;
    menuThemBG: string;
    menuThemeText: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    primary?: string;
    secondary?: string;
    textPrimary?: string;
    textSecondary?: string;
    textDanger?: string;
    danger?: string;
    error?: string;
    warning?: string;
    popBackground?: string;
    modalBackground?: string;
    mainFontFamily?: string;
    seconFontFamily?: string;
    borderPrimaryColor?: string;
    menuThemBG?: string;
    menuThemeText?: string;
  }
}

export const themeDefault = createTheme({
  primary: '#00BFDF',
  secondary: '#575757',
  textPrimary: '#F0F0F0',
  textSecondary: '#00A099',
  textDanger: '#F46060',
  danger: 'rgba(0, 0, 0, 0.87)',
  error: 'rgba(0, 0, 0, 0.54)',
  warning: 'yellow',
  popBackground: '#F5F8FF',
  modalBackground: '#F5F8FF',
  borderPrimaryColor: '#939598',
  mainFontFamily: 'Naum Gothic, sans-serif',
  seconFontFamily: 'sans-serif',
  menuThemBG: '#00BFDF',
  menuThemeText: '#F1F2F2',
  typography: {
    fontSize: 16,
    fontFamily: 'Naum Gothic, sans-serif',
  },
  palette: {
    primary: {
      main: '#00BFDF',
    },
    secondary: {
      main: '#6D6E71',
    },
  },
});
