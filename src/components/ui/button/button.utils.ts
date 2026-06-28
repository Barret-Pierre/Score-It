import { DefaultTheme } from 'styled-components/native';

export const getButtonBackground = (
  theme: DefaultTheme,
  state: {
    disabled?: boolean;
    pressed?: boolean;
  },
  variant?: 'default' | 'outlined' | 'dashed',
) => {
  if (variant === 'outlined' || variant === 'dashed') {
    return theme.primitives.colors.transparent;
  }
  if (state.disabled) return theme.semantic.buttons.disabled.bg;
  if (state.pressed) return theme.semantic.buttons.active.bg;
  return theme.semantic.buttons.bg;
};
