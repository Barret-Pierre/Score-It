import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.title}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const ThemeButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-horizontal: ${({ theme }) => theme.spacing.lg}px;
  padding-vertical: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.medium}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: ${({ theme }) => theme.typography.fontSize.regular}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const ThemeInfo = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.regular}px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;
