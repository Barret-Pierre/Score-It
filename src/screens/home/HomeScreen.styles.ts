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

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.body.md.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.body.md.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.body.md.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.body.md.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.primary};
`;
