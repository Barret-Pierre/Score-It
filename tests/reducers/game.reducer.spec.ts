import { gameReducer } from '@/reducers/game.reducer';
import { GameAction } from '@/domains/models/game.model';

describe('gameReducer', () => {
  it('should handle action where a game is selected', () => {
    const result = gameReducer(
      { selectedGame: null, players: [] },
      { type: 'SELECT_GAME', payload: { id: '1', title: 'Mock Game', image: 'mock-image.png' } },
    );
    expect(result.selectedGame).toEqual({ id: '1', title: 'Mock Game', image: 'mock-image.png' });
  });

  it('should throw an error for unknown action', () => {
    expect(() =>
      gameReducer({ selectedGame: null, players: [] }, {
        type: 'UNKNOWN_ACTION',
        payload: { id: '1', title: 'Mock Game', image: 'mock-image.png' },
      } as unknown as GameAction),
    ).toThrow('Action inconnue');
  });
});
