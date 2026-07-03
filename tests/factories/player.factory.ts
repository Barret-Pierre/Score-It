import { Player } from '@/domains/models/player.model';

export const createPlayer = (overrides: Partial<Player> = {}): Player => ({
  id: '1',
  name: 'Mock Player',
  ...overrides,
});
