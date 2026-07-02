import { Player } from '@/types/player';

export type PlayerCardProps = {
  player: Player;
  onPress: () => void;
  testID?: string;
};
