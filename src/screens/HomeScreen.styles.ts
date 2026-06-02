import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.semantic.screen.bg};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.heading.xl.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.display.xl.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.display.xl.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.heading.xl.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.primary};
`;
