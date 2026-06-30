import { styled } from 'styled-components/native';

export const Card = styled.Pressable`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.semantic.cards.bg};
  border-radius: ${({ theme }) => theme.semantic.cards.borderRadius}px;
  border-width: ${({ theme }) => theme.semantic.cards.borderWeight}px;
  border-color: ${({ theme }) => theme.semantic.cards.borderColor};
  padding: ${({ theme }) => theme.semantic.cards.padding}px;
  gap: ${({ theme }) => theme.semantic.cards.gap}px;
`;

export const PlayerName = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.semantic.text.placeholder};
`;
