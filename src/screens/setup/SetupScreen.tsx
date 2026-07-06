import { useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { SquarePlus } from 'lucide-react-native';
import * as Styled from './SetupScreen.styles';
import { useTheme } from '@/contexts/ThemeContext';
import { useGame } from '@/contexts/GameContext';
import { Button, ScreenHeader } from '@/components/ui';
import { createEmptyPlayer, Player } from '@/domains/models/player.model';
import { PlayerCard } from '@/components';
import { ButtonVariant } from '@/components/ui/button/types.d';

const MAX_PLAYERS = 5;

export default function SetupScreen() {
  const { theme } = useTheme();
  const { state, dispatch } = useGame();

  const gap = theme.semantic.screen.gap;

  const onAddPlayerPress = useCallback(() => {
    const newPlayer = createEmptyPlayer();
    dispatch({ type: 'ADD_PLAYER', payload: newPlayer });
    dispatch({ type: 'CALCULATE_NUMBER_OF_PLAYERS_READY' });
  }, [dispatch]);

  const onRemovePlayerPress = useCallback(
    (id: string) => {
      dispatch({ type: 'REMOVE_PLAYER', payload: id });
      dispatch({ type: 'CALCULATE_NUMBER_OF_PLAYERS_READY' });
    },
    [dispatch],
  );

  const onUpdatePlayer = useCallback(
    (player: Player) => {
      dispatch({ type: 'UPDATE_PLAYER', payload: player });
      dispatch({ type: 'CALCULATE_NUMBER_OF_PLAYERS_READY' });
    },
    [dispatch],
  );

  const isSessionFull = useMemo(() => state.players.length === MAX_PLAYERS, [state]);

  const customSubtitle = useMemo(() => {
    if (state.numberOfPlayersReady > 3 && state.numberOfPlayersReady < MAX_PLAYERS) {
      return (
        <Styled.CustomSubtitle>
          {state.numberOfPlayersReady} joueurs sur {MAX_PLAYERS}
        </Styled.CustomSubtitle>
      );
    }
    if (state.numberOfPlayersReady === MAX_PLAYERS) {
      return <Styled.CustomSubtitle>Session complète</Styled.CustomSubtitle>;
    }
    return <Styled.CustomSubtitle>3 joueurs minimum</Styled.CustomSubtitle>;
  }, [state]);

  const handlePlayerCardLongPress = useCallback((id: string) => {
    console.log(`pressed player card ${id}`);
  }, []);

  return (
    <Styled.Container testID="setup-screen">
      <ScreenHeader
        title="Ajouter des joueurs"
        customSubtitle={customSubtitle}
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
          isSessionFull === false ? (
            <Button
              icon={SquarePlus}
              onPress={onAddPlayerPress}
              testID="add-player-button"
              variant={ButtonVariant.DASHED}
            />
          ) : null
        }
      />
    </Styled.Container>
  );
}
