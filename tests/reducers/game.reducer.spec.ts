import { gameReducer } from '@/reducers/game.reducer';
import { GameAction } from '@/domains/models/game.model';
import { createGame } from '@tests/factories/game.factory';
import { createPlayer } from '@tests/factories/player.factory';

describe('gameReducer', () => {
  it('should handle action where a game is selected', () => {
    const result = gameReducer(
      { selectedGame: null, players: [] },
      { type: 'SELECT_GAME', payload: createGame() },
    );
    expect(result.selectedGame).toEqual(createGame());
  });

  it('should handle action where a player is added', () => {
    const result = gameReducer(
      { selectedGame: null, players: [] },
      { type: 'ADD_PLAYER', payload: createPlayer() },
    );
    expect(result.players).toEqual([createPlayer()]);
  });

  it('should throw an error for unknown action', () => {
    expect(() =>
      gameReducer({ selectedGame: null, players: [] }, {
        type: 'UNKNOWN_ACTION',
        payload: createGame(),
      } as unknown as GameAction),
    ).toThrow('Action inconnue');
  });
});
