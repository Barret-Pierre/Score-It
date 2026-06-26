import { useTheme } from '@/contexts/ThemeContext';
import * as Styled from './SetupScreen.styles';
import { ScreenHeader } from '@/components/ui';
import { FlatList } from 'react-native';
import { GripVertical, SquarePlus, Trash2 } from 'lucide-react-native';
import { useCallback, useState } from 'react';

export default function SetupScreen() {
  const { theme } = useTheme();
  const [players, setPlayers] = useState([{ id: '1', name: '' }]);

  const gap = theme.semantic.screen.gap;

  const onPress = useCallback(() => {
    console.log('pressed');
    setPlayers((prev) => {
      console.log(prev.length);
      return [...prev, { id: String(prev.length + 1), name: '' }];
    });
  }, []);

  return (
    <Styled.Container testID="setup-screen">
      <ScreenHeader
        title="Ajouter des joueurs"
        customSubtitle={<Styled.CustomSubtitle>2 joueurs minimum</Styled.CustomSubtitle>}
        testID="screen-header"
      />
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap }}
        renderItem={({ item }) => (
          <Styled.CardPlayer>
            <GripVertical color={theme.semantic.icon.primary} size={24} />
            <Styled.PlayerName>{item.name || `Joueur ${item.id}`}</Styled.PlayerName>
            <Trash2 color={theme.semantic.text.accent} />
          </Styled.CardPlayer>
        )}
        ListFooterComponent={
          <Styled.Button onPress={onPress}>
            <SquarePlus color={theme.semantic.icon.enabled} size={24} />
          </Styled.Button>
        }
      />
    </Styled.Container>
  );
}
