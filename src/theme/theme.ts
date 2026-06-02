import { DefaultTheme } from 'styled-components/native';
import { primitives, text, typography, screen, icon, divider, header, bottom } from './tokens';

export const lightTheme: DefaultTheme = {
  primitives,
  semantic: {
    text,
    typography,
    screen,
    icon,
    divider,
    header,
    bottom,
  },
};

export const darkTheme: DefaultTheme = lightTheme;
