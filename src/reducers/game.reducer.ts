import { GameAction, GameState } from '@/types/game';

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SELECT_GAME':
      return { ...state, selectedGame: action.payload };
    default:
      throw new Error('Action inconue');
  }
}
