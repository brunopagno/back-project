/* eslint-disable no-multi-spaces */
import Hero from '../entities/Hero';
import { MagicPunch } from './magics';

export default new Hero(
  100,      // health
  5,        // health regen rate
  100,      // mana
  20,       // mana regen rate
  [         // default magics
    MagicPunch,
  ],
);

export const HandSize = 3;
