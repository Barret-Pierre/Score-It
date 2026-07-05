import { styled } from 'styled-components/native';

export const CardImageWrapper = styled.View`
  width: 100%;
  aspect-ratio: 1;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.heading.lg.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.heading.lg.fontSize}px;
  line-height: ${({ theme }) => theme.semantic.typography.heading.lg.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.primary};
`;

export const Card = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.semantic.cards.common.bg};
  border-radius: ${({ theme }) => theme.semantic.cards.common.borderRadius}px;
  border-width: ${({ theme }) => theme.semantic.cards.common.borderWeight}px;
  border-color: ${({ theme }) => theme.semantic.cards.common.borderColor};
  padding: ${({ theme }) => theme.semantic.cards.common.padding}px;
  gap: ${({ theme }) => theme.semantic.cards.common.gap}px;
`;
