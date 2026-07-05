import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { SquarePlus } from 'lucide-react-native';
import * as Styled from './SetupScreen.styles';
import { useTheme } from '@/contexts/ThemeContext';
import { useGame } from '@/contexts/GameContext';
import { Button, ScreenHeader } from '@/components/ui';
import { createEmptyPlayer, Player } from '@/domains/models/player.model';
import { PlayerCard } from '@/components';
import { ButtonVariant } from '@/components/ui/button/types.d';

export default function SetupScreen() {
  const { theme } = useTheme();
  const { state, dispatch } = useGame();

  const gap = theme.semantic.screen.gap;

  const onAddPlayerPress = useCallback(() => {
    const newPlayer = createEmptyPlayer();
    dispatch({ type: 'ADD_PLAYER', payload: newPlayer });
  }, [dispatch]);

  const onRemovePlayerPress = useCallback(
    (id: string) => {
      dispatch({ type: 'REMOVE_PLAYER', payload: id });
    },
    [dispatch],
  );

  const onUpdatePlayer = useCallback(
    (player: Player) => {
      dispatch({ type: 'UPDATE_PLAYER', payload: player });
    },
    [dispatch],
  );

  const handlePlayerCardLongPress = useCallback((id: string) => {
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
        data={state.players}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap }}
        keyboardShouldPersistTaps="handled"
        removeClippedSubviews={false}
        renderItem={({ item }) => (
          <PlayerCard
            player={item}
            onLongPress={() => handlePlayerCardLongPress(item.id)}
            onRemovePress={() => onRemovePlayerPress(item.id)}
            onUpdatePlayer={onUpdatePlayer}
            testID={item.id}
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
