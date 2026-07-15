import { styled } from 'styled-components/native';
import { SubtitleTextVariant } from './types.d';

export const CustomSubtitle = styled.Text<{
  $variant?: SubtitleTextVariant;
}>`
  font-family: ${({ theme }) => theme.semantic.typography.button.md.fontFamily};
  font-size: ${({ theme }) => theme.semantic.typography.button.md.fontSize}px;
  line-height: ${({ theme }) => theme.semantic.typography.button.md.lineHeight}px;
  color: ${({ theme, $variant = SubtitleTextVariant.PRIMARY }) => {
    return theme.semantic.text[$variant];
  }};
`;

export const Info = styled.Text`
  color: ${({ theme }) => {
    return theme.semantic.text.info;
  }};
`;
