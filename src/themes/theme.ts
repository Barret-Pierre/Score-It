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
  buttons,
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
    buttons,
  },
};

export const darkTheme: DefaultTheme = lightTheme;
