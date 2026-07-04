import { GameAction, GameState } from '@/domains/models/game.model';

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SELECT_GAME':
      return { ...state, selectedGame: action.payload };
    case 'ADD_PLAYER':
      return { ...state, players: [...state.players, action.payload] };
    case 'REMOVE_PLAYER':
      return { ...state, players: state.players.filter((player) => player.id !== action.payload) };
    default:
      throw new Error('Action inconnue');
  }
}
