import { Game } from '@/domains/models/game.model';

export const createGame = (overrides: Partial<Game> = {}): Game => ({
  id: '1',
  title: 'Mock Game',
  image: require('../../assets/mock-game.png'),
  ...overrides,
});
