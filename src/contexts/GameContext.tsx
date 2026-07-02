import { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';
import { gameReducer } from '@/reducers/game.reducer';
import { GameContextType, GameState } from '@/domains/models/game.model';
import { createEmptyPlayer } from '@/domains/models/player.model';

const initialState: GameState = {
  selectedGame: null,
  players: [createEmptyPlayer()],
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  return context;
}
