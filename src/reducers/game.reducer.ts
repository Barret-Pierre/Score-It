import { GameAction, GameState } from '@/types/game';

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SELECT_GAME':
      return { ...state, selectedGame: action.payload };
    case 'ADD_PLAYER':
      return { ...state, players: [...state.players, action.payload] };
    default:
      throw new Error('Action inconnue');
  }
}
