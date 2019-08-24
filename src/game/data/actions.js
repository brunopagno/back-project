import * as Magics from './magics';
import * as Monsters from './monsters';
import { sample } from '../util';
import Battle from '../entities/Battle';

export function Nothing() {
  // nothing happens
}

export function Loot(gameState) {
  const magic = sample(Object.values(Magics));
  gameState.hero.addMagicToGrimoire(magic);
}

export function StartBattle() {
  const monster = sample(Object.values(Monsters));
  return new Battle(monster);
}
