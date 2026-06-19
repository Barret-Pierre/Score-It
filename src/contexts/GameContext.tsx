import { gameReducer } from '@/reducers/game.reducer';
import { GameContextType, GameState } from '@/types/game';
import { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';

const initialState: GameState = {
  selectedGame: null,
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
