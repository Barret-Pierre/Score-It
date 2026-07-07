import { styled } from 'styled-components/native';

export const Card = styled.Pressable<{ $focused: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.semantic.cards.common.bg};
  border-radius: ${({ theme }) => theme.semantic.cards.common.borderRadius}px;
  border-width: ${({ theme }) => theme.semantic.cards.common.borderWeight}px;
  border-color: ${({ theme, $focused }) =>
    $focused ? theme.semantic.cards.focused.borderColor : theme.semantic.cards.common.borderColor};
  padding-horizontal: ${({ theme }) => theme.semantic.cards.common.padding}px;
  gap: ${({ theme }) => theme.semantic.cards.common.gap}px;
`;

export const PlayerNameInput = styled.TextInput`
  color: ${({ theme }) => theme.semantic.text.primary};
  font-family: ${({ theme }) => theme.semantic.typography.body.md.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.body.md}px;
  line-height: ${({ theme }) => theme.semantic.typography.body.md.lineHeight}px;
  padding-vertical: ${({ theme }) => theme.semantic.cards.common.padding}px;
  flex: 1;
`;
