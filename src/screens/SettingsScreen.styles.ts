import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.semantic.screen.bg};
  padding: ${({ theme }) => theme.semantic.screen.padding}px;
  gap: ${({ theme }) => theme.semantic.screen.gap}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.heading.xl.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.heading.xl.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.heading.xl.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.heading.xl.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.primary};
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

export const ThemeInfo = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.body.md.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.body.md.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.body.md.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.body.md.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.disabled};
  margin-bottom: ${({ theme }) => theme.primitives.spacing.md}px;
`;
