import { Engine } from '@/domains/models/engine.model';

export const Flip7Engine: Engine = {
  maxPlayers: 5,
  minPlayers: 3,

  isMaxPlayerReached(playerCount: number): boolean {
    return playerCount >= this.maxPlayers;
  },

  isMinPlayerReadyReached(readyCount: number): boolean {
    return readyCount >= this.minPlayers;
  },

  isSessionReady(playerCount: number, readyCount: number): boolean {
    return playerCount === readyCount && readyCount >= this.minPlayers;
  },
};
