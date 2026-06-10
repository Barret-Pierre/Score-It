import { styled } from 'styled-components/native';

interface LineProps {
  vertical?: boolean;
}

export const Line = styled.View<LineProps>`
  background-color: ${({ theme }) => theme.semantic.divider.color};
  border-radius: ${({ theme }) => theme.semantic.divider.borderRadius}px;
  ${({ vertical, theme }) =>
    vertical
      ? `
    width: ${theme.semantic.divider.weight}px;
    height: 100%;
  `
      : `
    height: ${theme.semantic.divider.weight}px;
    width: 100%;
  `}
`;
