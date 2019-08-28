import Action from '../entities/Action';
import * as Magics from './magics';
import * as Monsters from './monsters';
import { sample } from '../util';
import Battle from '../entities/Battle';

export const Nothing = new Action(
  'Nothing',
  'Nothing happens',
  () => {},
);

export const Loot = new Action(
  'Loot',
  'You get a new magic for your grimoire!',
  (gameState) => {
    const magic = sample(Object.values(Magics));
    gameState.hero.addMagicToGrimoire(magic);
  },
);

export const StartBattle = new Action(
  'Challenge!',
  'A wild monster accepts your duel!',
  () => {
    const monster = sample(Object.values(Monsters));
    return new Battle(monster);
  },
);
