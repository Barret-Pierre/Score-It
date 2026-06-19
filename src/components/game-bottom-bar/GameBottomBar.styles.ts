import { styled } from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.semantic.bottom.bg};
  padding: ${({ theme }) => theme.semantic.bottom.padding}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.display.xl.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.display.xl.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.display.xl.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.display.xl.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.accent};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.primitives.colors.pink[500]};
  padding-horizontal: ${({ theme }) => theme.primitives.spacing.xl}px;
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
