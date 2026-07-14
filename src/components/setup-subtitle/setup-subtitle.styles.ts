import { styled } from 'styled-components/native';

export const CustomSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.body.accent.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.body.accent.fontSize}px;
  line-height: ${({ theme }) => theme.semantic.typography.body.accent.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.accent};
`;
