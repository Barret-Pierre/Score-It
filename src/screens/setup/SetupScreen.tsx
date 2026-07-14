import { useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { SquarePlus } from 'lucide-react-native';
import * as Styled from './SetupScreen.styles';
import { useTheme } from '@/contexts/ThemeContext';
import { useGame } from '@/contexts/GameContext';
import { Button, ScreenHeader } from '@/components/ui';
import { createEmptyPlayer, Player } from '@/domains/models/player.model';
import { PlayerCard, SetupSubtitle } from '@/components';
import { ButtonVariant } from '@/components/ui/button/types.d';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';

export default function SetupScreen() {
  const { theme } = useTheme();
  const { state, dispatch, engine } = useGame();

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

  const isSessionFull = useMemo(() => engine?.isSessionFull(state.players.length), [state, engine]);
  const isSessionReady = useMemo(
    () => engine?.isReady(state.players.length, state.numberOfPlayersReady),
    [state, engine],
  );

  const handlePlayerCardLongPress = useCallback((id: string) => {
    console.log(`pressed player card ${id}`);
  }, []);

  return (
    <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={90} style={{ flex: 1 }}>
      <Styled.Container testID="setup-screen">
        <ScreenHeader
          title="Ajouter des joueurs"
          customSubtitle={
            <SetupSubtitle
              isEngineReady={engine != null}
              isSessionFull={isSessionFull ?? false}
              isSessionReady={isSessionReady ?? false}
              numberOfPlayersReady={state.numberOfPlayersReady}
              maxPlayers={engine?.maxPlayers ?? 0}
              minPlayers={engine?.minPlayers ?? 0}
            />
          }
          testID="screen-header"
        />
        <FlatList
          data={state.players}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap }}
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
            !isSessionFull ? (
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
    </KeyboardAvoidingView>
  );
}
