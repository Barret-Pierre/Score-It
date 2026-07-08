import { Flip7Engine } from '@/domains/engine/flip7.engine';
import { Engine } from '@/domains/models/engine.model';

type GameEngine = {
  id: string;
  engine: Engine;
  gameId: string;
};

export const GAME_ENGINES: GameEngine[] = [{ id: '1', engine: Flip7Engine, gameId: '1' }];
