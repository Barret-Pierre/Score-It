import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      text: string;
      textSecondary: string;
      border: string;
      error: string;
      success: string;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    typography: {
      fontSize: {
        small: number;
        regular: number;
        large: number;
        title: number;
      };
      fontWeight: {
        regular: '400';
        medium: '500';
        bold: '700';
      };
    };
    borderRadius: {
      small: number;
      medium: number;
      large: number;
    };
  }
}
