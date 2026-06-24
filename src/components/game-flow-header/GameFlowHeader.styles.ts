import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.semantic.header.bg};
  padding: ${({ theme }) => theme.semantic.header.padding}px;
  gap: ${({ theme }) => theme.semantic.header.gameFlow.gap}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.heading.lg.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.heading.lg.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.heading.lg.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.heading.lg.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.primary};
  flex: 1;
  text-align: center;
  margin-right: ${({ theme }) => theme.semantic.header.gameFlow.marginRight}px;
`;
