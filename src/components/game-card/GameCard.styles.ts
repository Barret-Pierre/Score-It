import { styled } from 'styled-components/native';

export const CardImageWrapper = styled.View`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.semantic.typography.heading.lg.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.heading.lg.fontSize}px;
  font-weight: ${({ theme }) => theme.semantic.typography.heading.lg.fontWeight};
  line-height: ${({ theme }) => theme.semantic.typography.heading.lg.lineHeight}px;
  color: ${({ theme }) => theme.semantic.text.primary};
`;

export const Card = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.semantic.cards.bg};
  border-radius: ${({ theme }) => theme.semantic.cards.borderRadius}px;
  border-width: ${({ theme }) => theme.semantic.cards.borderWeight}px;
  border-color: ${({ theme }) => theme.semantic.cards.borderColor};
  padding: ${({ theme }) => theme.semantic.cards.padding}px;
  gap: ${({ theme }) => theme.semantic.cards.gap}px;
`;
