import { Game } from '@/components/game-card/types';

export type RootStackParamList = {
  Tabs: undefined;
  Setup: { game: Game };
};

export type TabParamList = {
  Home: undefined;
  Settings: undefined;
};
