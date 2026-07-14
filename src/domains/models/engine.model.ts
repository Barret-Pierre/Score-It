export type Engine = {
  maxPlayers: number;
  minPlayers: number;
  isSessionFull(playerCount: number): boolean;
  isReady(playerCount: number, readyCount: number): boolean;
};

export type GameEngine = {
  id: string;
  engine: Engine;
  gameId: string;
};
