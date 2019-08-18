import Effect from '../entities/Effect';
import * as Magics from './magics';
import { sample } from '../util';

export const Nothing = new Effect(
  'Nothing',
);

export const Loot = new Effect(
  'Loot',
  (gameState) => {
    const magic = sample(Object.values(Magics));
    gameState.hero.addMagicToGrimoire(magic);
    return true;
  },
);
