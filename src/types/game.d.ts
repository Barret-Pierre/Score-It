export type Game = {
  id: string;
  title: string;
  image: ReturnType<typeof require>;
};

export type GameState = {
  selectedGame: Game | null;
};

export type GameAction = { type: 'SELECT_GAME'; payload: Game };

export type GameContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};
