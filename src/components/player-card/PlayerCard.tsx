import { GripVertical, Trash2 } from 'lucide-react-native';
import * as Styled from './PlayerCard.styles';
import { PlayerCardProps } from './types';
import { useTheme } from '@/contexts/ThemeContext';

export default function PlayerCard({ player, onPress, testID }: Readonly<PlayerCardProps>) {
  const { theme } = useTheme();

  return (
    <Styled.Card onPress={onPress} testID={testID}>
      <GripVertical color={theme.semantic.icon.primary} size={theme.semantic.icon.size.md} />
      <Styled.PlayerName>{player.name || `Joueur ${player.id}`}</Styled.PlayerName>
      <Trash2 color={theme.semantic.text.accent} size={theme.semantic.icon.size.md} />
    </Styled.Card>
  );
}
