import { useTheme } from '@/contexts/ThemeContext';
import * as Styled from './GameHeader.styles';
import { ArrowLeft } from 'lucide-react-native';

export default function GameHeader() {
  const { theme } = useTheme();
  const iconColor = theme.semantic.icon.primary;
  const iconSize = theme.semantic.icon.size.md;

  return (
    <Styled.Container testID="game-header">
      <ArrowLeft color={iconColor} size={iconSize} />
      <Styled.Title>Score-It</Styled.Title>
    </Styled.Container>
  );
}
