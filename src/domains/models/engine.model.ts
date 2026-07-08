export type Engine = {
  maxPlayers: number;
  minPlayers: number;
  isSessionFull(playerCount: number): boolean;
  isReady(playerCount: number, readyCount: number): boolean;
  getReadyCount(players: { name: string }[]): number;
};
