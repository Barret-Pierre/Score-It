import { DefaultTheme } from 'styled-components/native';

export const getButtonBackground = (
  theme: DefaultTheme,
  state: {
    disabled?: boolean;
    pressed?: boolean;
  },
) => {
  if (state.disabled) return theme.primitives.colors.graphite[50];
  if (state.pressed) return theme.primitives.colors.pink[600];
  return theme.primitives.colors.pink[500];
};
