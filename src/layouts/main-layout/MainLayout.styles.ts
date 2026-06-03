import { styled } from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.semantic.screen.bg};
`;

export const Content = styled.View`
  flex: 1;
`;
