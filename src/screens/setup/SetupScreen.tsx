import { useTheme } from '@/contexts/ThemeContext';
import * as Styled from './SetupScreen.styles';
import { Button, ScreenHeader } from '@/components/ui';
import { FlatList } from 'react-native';
import { SquarePlus } from 'lucide-react-native';
import { useCallback, useState } from 'react';
import PlayerCard from '@/components/player-card/PlayerCard';
import { ButtonVariant } from '@/components/ui/button/types.d';

export default function SetupScreen() {
  const { theme } = useTheme();
  const [players, setPlayers] = useState([{ id: '1', name: '' }]);

  const gap = theme.semantic.screen.gap;

  const onAddPlayerPress = useCallback(() => {
    setPlayers((prev) => {
      return [...prev, { id: String(prev.length + 1), name: '' }];
    });
  }, []);

  const handlePlayerCardPress = useCallback((id: string) => {
    console.log(`pressed player card ${id}`);
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
          <PlayerCard
            player={item}
            onPress={() => handlePlayerCardPress(item.id)}
            testID={`player-card-${item.id}`}
          />
        )}
        ListFooterComponent={
          <Button
            icon={SquarePlus}
            onPress={onAddPlayerPress}
            testID="add-player-button"
            variant={ButtonVariant.DASHED}
          />
        }
      />
    </Styled.Container>
  );
}
