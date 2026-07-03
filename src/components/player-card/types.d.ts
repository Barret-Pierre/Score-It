import { Player } from '@/domains/models/player.model';

export type PlayerCardProps = {
  player: Player;
  onPress: () => void;
  testID?: string;
};
