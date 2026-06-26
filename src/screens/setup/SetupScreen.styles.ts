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

export const CardPlayer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.semantic.cards.gap}px;
  background-color: ${({ theme }) => theme.semantic.cards.bg};
  padding: ${({ theme }) => theme.semantic.cards.padding}px;
  border-radius: ${({ theme }) => theme.semantic.cards.borderRadius}px;
  border-color: ${({ theme }) => theme.semantic.cards.borderColor};
  border-width: ${({ theme }) => theme.semantic.cards.borderWeight}px;
`;

export const PlayerName = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.semantic.text.placeholder};
`;

export const Button = styled.Pressable`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primitives.colors.transparent};
  padding-horizontal: ${({ theme }) => theme.semantic.buttons.paddingHorizontal}px;
  padding-vertical: ${({ theme }) => theme.semantic.buttons.paddingVertical}px;
  border-radius: ${({ theme }) => theme.semantic.buttons.borderRadius}px;
  border-color: ${({ theme }) => theme.primitives.colors.violet[500]};
  border-width: ${({ theme }) => theme.primitives.border.weight[2]}px;
  border-style: dashed;
`;
