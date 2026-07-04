import { useGame } from '@/contexts/GameContext';
import { GameState } from '@/domains/models/game.model';

export const mockGameState = (state: GameState, dispatch: jest.Mock) => {
  (useGame as jest.Mock).mockReturnValue({
    state,
    dispatch,
  });
};
