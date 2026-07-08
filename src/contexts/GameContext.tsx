import { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';
import { gameReducer } from '@/reducers/game.reducer';
import { GameContextType, GameState } from '@/domains/models/game.model';
import { getEngineByGameId } from '@/services/engine.service';

const initialState: GameState = {
  selectedGame: null,
  players: [],
  numberOfPlayersReady: 0,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const engine = useMemo(
    () => (state.selectedGame ? getEngineByGameId(state.selectedGame.id) : null),
    [state.selectedGame],
  );

  const value = useMemo(() => ({ state, dispatch, engine }), [state, dispatch, engine]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  return context;
}
