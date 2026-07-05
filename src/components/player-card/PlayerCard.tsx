import { Pressable } from 'react-native';
import { GripVertical, Trash2 } from 'lucide-react-native';
import * as Styled from './PlayerCard.styles';
import { PlayerCardProps } from './types';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

export default function PlayerCard({
  player,
  onLongPress,
  onRemovePress,
  onUpdatePlayer,
  testID,
}: Readonly<PlayerCardProps>) {
  const { theme } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const handleNameChange = (name: string) => {
    onUpdatePlayer({ ...player, name });
  };

  return (
    <Styled.Card onLongPress={onLongPress} testID={`player-card:${testID}`} $focused={isFocused}>
      <GripVertical color={theme.semantic.icon.primary} size={theme.semantic.icon.size.md} />
      <Styled.PlayerNameInput
        value={player.name}
        onChangeText={handleNameChange}
        placeholder="Nom du joueur"
        placeholderTextColor={theme.semantic.text.placeholder}
        testID={`player-name-input:${testID}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Pressable testID={`player-card-remove:${testID}`} onPress={onRemovePress}>
        <Trash2 color={theme.semantic.text.accent} size={theme.semantic.icon.size.md} />
      </Pressable>
    </Styled.Card>
  );
}
