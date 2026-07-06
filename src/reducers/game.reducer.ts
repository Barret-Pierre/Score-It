import { GameAction, GameState } from '@/domains/models/game.model';

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SELECT_GAME':
      return { ...state, selectedGame: action.payload };
    case 'ADD_PLAYER':
      return { ...state, players: [...state.players, action.payload] };
    case 'REMOVE_PLAYER':
      return { ...state, players: state.players.filter((player) => player.id !== action.payload) };
    case 'UPDATE_PLAYER':
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === action.payload.id ? action.payload : player,
        ),
      };
    case 'CALCULATE_NUMBER_OF_PLAYERS_READY':
      return {
        ...state,
        numberOfPlayersReady: state.players.filter((player) => player.name).length,
      };
    default:
      throw new Error('Action inconnue');
  }
}
