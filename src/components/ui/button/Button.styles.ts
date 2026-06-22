import { styled } from 'styled-components/native';

export const Button = styled.TouchableOpacity<{ $disabled?: boolean }>`
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.primitives.colors.graphite[50] : theme.primitives.colors.pink[500]};
  padding-horizontal: ${({ theme }) => theme.primitives.spacing.xl}px;
  padding-vertical: ${({ theme }) => theme.primitives.spacing.md}px;
  border-radius: ${({ theme }) => theme.primitives.radius.rounded}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<{ $disabled?: boolean }>`
  font-family: ${({ theme }) => theme.semantic.typography.button.md.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.button.md.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.button.md.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.button.md.lineHeight}px;
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.primitives.colors.graphite[200] : theme.semantic.text.inverse};
`;
