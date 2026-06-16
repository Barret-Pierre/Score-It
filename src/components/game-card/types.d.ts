export type Game = {
  id: string;
  title: string;
  image: ReturnType<typeof require>;
};

export type GameCardProps = {
  game: Game;
};
