import { getButtonBackground } from './button.utils';
import { styled } from 'styled-components/native';

export const Button = styled.View<{
  $disabled?: boolean;
  $pressed?: boolean;
  $variant?: 'default' | 'outlined' | 'dashed';
}>`
  background-color: ${({ theme, $disabled, $pressed, $variant }) =>
    getButtonBackground(theme, { disabled: $disabled, pressed: $pressed }, $variant)};
  padding-horizontal: ${({ theme }) => theme.semantic.buttons.paddingHorizontal}px;
  padding-vertical: ${({ theme }) => theme.semantic.buttons.paddingVertical}px;
  border-radius: ${({ theme }) => theme.semantic.buttons.borderRadius}px;
  border-width: ${({ theme, $variant }) =>
    $variant === 'outlined' || $variant === 'dashed' ? theme.primitives.border.weight[2] : 0}px;
  border-color: ${({ theme, $disabled, $variant }) => {
    if ($variant === 'outlined') {
      return $disabled ? theme.primitives.colors.graphite[50] : theme.primitives.colors.pink[500];
    }
    if ($variant === 'dashed') {
      return $disabled ? theme.primitives.colors.graphite[50] : theme.primitives.colors.violet[500];
    }
    return theme.primitives.colors.transparent;
  }};
  border-style: ${({ $variant }) => ($variant === 'dashed' ? 'dashed' : 'solid')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.semantic.buttons.gap}px;
`;

export const ButtonTitle = styled.Text<{
  $disabled?: boolean;
  $variant?: 'default' | 'outlined' | 'dashed';
}>`
  font-family: ${({ theme }) => theme.semantic.typography.button.md.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.button.md.fontSize}px;
  line-height: ${({ theme }) => theme.semantic.typography.button.md.lineHeight}px;
  color: ${({ theme, $disabled, $variant }) => {
    if ($variant === 'outlined') {
      return $disabled ? theme.semantic.text.disabled : theme.semantic.text.accent;
    }
    if ($variant === 'dashed') {
      return $disabled ? theme.semantic.text.disabled : theme.semantic.text.info;
    }
    return $disabled ? theme.semantic.text.disabled : theme.semantic.text.inverse;
  }};
`;
