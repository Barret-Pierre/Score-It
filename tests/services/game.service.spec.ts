import { getGames } from '@/services/game.service';

describe('getGames', () => {
  it('should return a game table', () => {
    const result = getGames();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('title');
    expect(result[0]).toHaveProperty('image');
  });
});
