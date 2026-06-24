import { styled } from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.semantic.header.bg};
  padding: ${({ theme }) => theme.semantic.header.padding}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.display.xl.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.display.xl.fontSize}px;
  line-height: ${({ theme }) => theme.semantic.typography.display.xl.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.accent};
`;
