import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.semantic.screen.bg};
  padding: ${({ theme }) => theme.semantic.screen.padding}px;
  gap: ${({ theme }) => theme.semantic.screen.gap}px;
`;

export const ThemeButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.primitives.colors.pink[500]};
  padding-horizontal: ${({ theme }) => theme.primitives.spacing.lg}px;
  padding-vertical: ${({ theme }) => theme.primitives.spacing.md}px;
  border-radius: ${({ theme }) => theme.primitives.radius.rounded}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.button.md.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.button.md.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.button.md.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.button.md.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.inverse};
`;
