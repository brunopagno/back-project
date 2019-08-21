import Monster from '../entities/Monster';
import Grimoire from '../entities/Grimoire';
import * as MonsterMagics from './monsterMagic';

export const Slime = new Monster(
  'Slime',
  'A gooey thing that for some reason does not like you',
  new Grimoire([
    MonsterMagics.WeirdSlide,
  ]),
);

export const RedSlime = new Monster(
  'Red Slime',
  'A gooey thing that for some reason does not like you and is red',
  new Grimoire([
    MonsterMagics.WeirdHug,
  ]),
);
