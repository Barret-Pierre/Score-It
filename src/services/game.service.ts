import { GAMES } from '@/datas/game.data';
import { Game } from '@/domains/models/game.model';

export function getGames(): Game[] {
  return GAMES;
}
