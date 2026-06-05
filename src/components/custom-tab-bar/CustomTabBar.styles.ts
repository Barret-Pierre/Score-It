import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.semantic.bottom.bg};
  border-top-width: ${({ theme }) => theme.semantic.bottom.borderWeight}px;
  border-top-color: ${({ theme }) => theme.primitives.colors.graphite[50]};
  padding-top: ${({ theme }) => theme.semantic.bottom.padding}px;
  padding-bottom: ${({ theme }) => theme.semantic.bottom.padding}px;
`;
