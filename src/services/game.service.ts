import { GAMES } from '@/datas/game.data';
import { Game } from '@/types/game';

export function getGames(): Game[] {
  return GAMES;
}
