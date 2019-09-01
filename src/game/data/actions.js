import Action from '../entities/Action';
import * as Magics from './magics';
import * as Monsters from './monsters';
import { sample } from '../util';
import Battle from '../entities/Battle';

export const Nothing = new Action(
  'Nothing happens',
  () => {},
);

export const Loot = new Action(
  'You get a new magic for your grimoire!',
  (gameState) => {
    const magicFactory = sample(Object.values(Magics));
    gameState.hero.addMagicToGrimoire(magicFactory());
  },
);

export const StartBattle = new Action(
  'A wild monster accepts your duel!',
  () => {
    const monsterFactory = sample(Object.values(Monsters));
    return new Battle(monsterFactory());
  },
);
