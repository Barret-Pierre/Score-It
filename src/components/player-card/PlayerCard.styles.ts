import { styled } from 'styled-components/native';

export const Card = styled.Pressable<{ $focused: boolean }>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.semantic.cards.common.bg};
  border-radius: ${({ theme }) => theme.semantic.cards.common.borderRadius}px;
  border-width: ${({ theme }) => theme.semantic.cards.common.borderWeight}px;
  border-color: ${({ theme, $focused }) =>
    $focused ? theme.semantic.cards.focused.borderColor : theme.semantic.cards.common.borderColor};
  padding: ${({ theme }) => theme.semantic.cards.common.padding}px;
  gap: ${({ theme }) => theme.semantic.cards.common.gap}px;
`;

export const PlayerNameInput = styled.TextInput`
  placeholdertextcolor: ${({ theme }) => theme.semantic.text.placeholder};
  color: ${({ theme }) => theme.semantic.text.primary};
  margin: 0px;
  padding: 0px;
  flex: 1;
`;
