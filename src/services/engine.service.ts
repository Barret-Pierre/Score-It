import { GAME_ENGINES } from '@/datas/gameEngine.data';
import { Engine } from '@/domains/models/engine.model';

export function getEngineByGameId(gameId: string): Engine | null {
  const gameEngine = GAME_ENGINES.find((engine) => engine.gameId === gameId);
  return gameEngine ? gameEngine.engine : null;
}
