import { gameReducer } from '@/reducers/game.reducer';
import { GameAction } from '@/types/game';

describe('gameReducer', () => {
  it('should handle action where a game is selected', () => {
    const result = gameReducer(
      { selectedGame: null },
      { type: 'SELECT_GAME', payload: { id: '1', title: 'Mock Game', image: 'mock-image.png' } },
    );
    expect(result.selectedGame).toEqual({ id: '1', title: 'Mock Game', image: 'mock-image.png' });
  });

  it('should throw an error for unknown action', () => {
    expect(() =>
      gameReducer(
        { selectedGame: null },
        {
          type: 'UNKNOWN_ACTION' as GameAction['type'],
          payload: { id: '1', title: 'Mock Game', image: 'mock-image.png' },
        },
      ),
    ).toThrow('Action inconue');
  });
});
