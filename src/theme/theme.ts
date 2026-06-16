import { DefaultTheme } from 'styled-components/native';
import {
  primitives,
  text,
  typography,
  screen,
  icon,
  divider,
  header,
  bottom,
  cards,
} from './tokens';

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
    cards,
  },
};

export const darkTheme: DefaultTheme = lightTheme;
