import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.semantic.screen.bg};
  padding: ${({ theme }) => theme.semantic.screen.padding}px;
  gap: ${({ theme }) => theme.semantic.screen.gap}px;
`;

export const CustomSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.body.accent.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.body.accent.fontSize}px;
  line-height: ${({ theme }) => theme.semantic.typography.body.accent.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.accent};
`;
