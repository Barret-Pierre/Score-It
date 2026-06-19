import { styled } from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.semantic.header.bg};
  padding: ${({ theme }) => theme.semantic.header.padding}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.display.xl.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.display.xl.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.display.xl.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.display.xl.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.accent};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.primitives.colors.white};
  padding: ${({ theme }) => theme.primitives.spacing.md}px;
  border-radius: ${({ theme }) => theme.primitives.radius.rounded}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.body.md.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.body.md.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.body.md.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.body.md.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.primary};
`;
