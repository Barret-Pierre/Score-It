import { Player } from '@/domains/models/player.model';

export type PlayerCardProps = {
  player: Player;
  onLongPress: () => void;
  onRemovePress: () => void;
  onUpdatePlayer: (player: Player) => void;
  testID?: string;
};
