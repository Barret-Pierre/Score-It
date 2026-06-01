import { DefaultTheme } from 'styled-components/native';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    text: '#000000',
    textSecondary: '#8E8E93',
    border: '#C6C6C8',
    error: '#FF3B30',
    success: '#34C759',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    fontSize: {
      small: 12,
      regular: 16,
      large: 20,
      title: 28,
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    background: '#000000',
    surface: '#1C1C1E',
    text: '#FFFFFF',
    textSecondary: '#8E8E93',
    border: '#38383A',
    error: '#FF453A',
    success: '#32D74B',
  },
  spacing: lightTheme.spacing,
  typography: lightTheme.typography,
  borderRadius: lightTheme.borderRadius,
};
