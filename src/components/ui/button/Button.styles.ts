import { styled } from 'styled-components/native';
import { ButtonVariant } from './types.d';

export const Button = styled.View<{
  $disabled?: boolean;
  $pressed?: boolean;
  $variant?: ButtonVariant;
}>`
  background-color: ${({ theme, $disabled, $pressed, $variant = ButtonVariant.DEFAULT }) => {
    const button = theme.semantic.buttons[$variant];

    if ($disabled) return button.backgroundDisabled;
    if ($pressed) return button.backgroundPressed;

    return button.background;
  }};
  padding-horizontal: ${({ theme }) => theme.semantic.buttons.common.paddingHorizontal}px;
  padding-vertical: ${({ theme }) => theme.semantic.buttons.common.paddingVertical}px;
  border-radius: ${({ theme }) => theme.semantic.buttons.common.borderRadius}px;
  border-width: ${({ theme, $variant = ButtonVariant.DEFAULT }) =>
    theme.semantic.buttons[$variant].borderWidth}px;
  border-color: ${({ theme, $disabled, $variant = ButtonVariant.DEFAULT }) => {
    const button = theme.semantic.buttons[$variant];
    return $disabled ? button.borderColorDisabled : button.borderColor;
  }};
  border-style: ${({ theme, $variant = ButtonVariant.DEFAULT }) =>
    theme.semantic.buttons[$variant].borderStyle};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.semantic.buttons.common.gap}px;
`;

export const ButtonTitle = styled.Text<{
  $disabled?: boolean;
  $variant?: ButtonVariant;
}>`
  font-family: ${({ theme }) => theme.semantic.typography.button.md.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.button.md.fontSize}px;
  line-height: ${({ theme }) => theme.semantic.typography.button.md.lineHeight}px;
  color: ${({ theme, $disabled, $variant = ButtonVariant.DEFAULT }) => {
    const button = theme.semantic.buttons[$variant];
    return $disabled ? button.textDisabled : button.text;
  }};
`;
