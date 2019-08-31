import Monster from '../entities/Monster';
import Grimoire from '../entities/Grimoire';
import * as MonsterMagics from './monsterMagic';

import SlimeImage from '../../img/slime.png';
import RedSlimeImage from '../../img/red_slime.png';

export const Slime = new Monster(
  'Slime',
  'A gooey thing that for some reason does not like you',
  SlimeImage,
  5,
  100,
  new Grimoire([
    MonsterMagics.WeirdSlide,
  ]),
);

export const RedSlime = new Monster(
  'Red Slime',
  'A gooey thing that for some reason does not like you and is red',
  RedSlimeImage,
  25,
  1000,
  new Grimoire([
    MonsterMagics.WeirdHug,
  ]),
);
