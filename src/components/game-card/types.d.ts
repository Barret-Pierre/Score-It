import { Game } from '@/domains/models/game.model';

export type GameCardProps = {
  game: Game;
  onPress: () => void;
  testID?: string;
};
