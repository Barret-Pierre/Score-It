export type Engine = {
  maxPlayers: number;
  minPlayers: number;
  isMaxPlayerReached(playerCount: number): boolean;
  isMinPlayerReadyReached(readyCount: number): boolean;
  isSessionReady(playerCount: number, readyCount: number): boolean;
};

export type GameEngine = {
  id: string;
  engine: Engine;
  gameId: string;
};
