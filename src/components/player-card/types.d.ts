export type Player = {
  id: string;
  name: string;
};

export type PlayerCardProps = {
  player: Player;
  onPress: () => void;
  testID?: string;
};
