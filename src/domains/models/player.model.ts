import * as Crypto from 'expo-crypto';

export type Player = {
  id: string;
  name: string;
};

export function createEmptyPlayer(): Player {
  return { id: Crypto.randomUUID(), name: '' };
}
