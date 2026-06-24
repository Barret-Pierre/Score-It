import { getButtonBackground } from './button.utils';
import { styled } from 'styled-components/native';

export const Button = styled.View<{ $disabled?: boolean; $pressed?: boolean }>`
  background-color: ${({ theme, $disabled, $pressed }) =>
    getButtonBackground(theme, { disabled: $disabled, pressed: $pressed })};
  padding-horizontal: ${({ theme }) => theme.semantic.buttons.paddingHorizontal}px;
  padding-vertical: ${({ theme }) => theme.semantic.buttons.paddingVertical}px;
  border-radius: ${({ theme }) => theme.semantic.buttons.borderRadius}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<{ $disabled?: boolean }>`
  font-family: ${({ theme }) => theme.semantic.typography.button.md.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.button.md.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.button.md.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.button.md.lineHeight}px;
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.semantic.text.disabled : theme.semantic.text.inverse};
`;
