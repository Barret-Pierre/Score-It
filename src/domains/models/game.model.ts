import { Player } from './player.model';

export type Game = {
  id: string;
  title: string;
  image: ReturnType<typeof require>;
};

export type GameState = {
  selectedGame: Game | null;
  players: Player[];
};

export type GameAction =
  | { type: 'SELECT_GAME'; payload: Game }
  | { type: 'ADD_PLAYER'; payload: Player }
  | { type: 'REMOVE_PLAYER'; payload: Player['id'] };

export type GameContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};
