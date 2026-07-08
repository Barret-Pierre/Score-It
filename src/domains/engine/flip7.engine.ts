import { Engine } from '@/domains/models/engine.model';

export const Flip7Engine: Engine = {
  maxPlayers: 10,
  minPlayers: 3,

  isSessionFull(playerCount: number): boolean {
    return playerCount >= this.maxPlayers;
  },

  isReady(playerCount: number, readyCount: number): boolean {
    return playerCount >= this.minPlayers && readyCount >= this.minPlayers;
  },

  getReadyCount(players: { name: string }[]): number {
    return players.filter((player) => player.name).length;
  },
};
