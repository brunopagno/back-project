import Card from '../entities/Card';
import * as Actions from './actions';

import MoveImage from '../../img/move.png';
import StairsImage from '../../img/stair.png';
import LootImage from '../../img/loot.png';
import StaffImage from '../../img/staff.png';

export const Move = new Card(
  'Move',
  'Now is not the time to waste time.',
  MoveImage,
  Actions.Nothing,
  Actions.Nothing,
);

export const Staircase = new Card(
  'Staircase',
  'Go down one level. Monsters down there are stronger.',
  StairsImage,
  Actions.Nothing,
  Actions.Nothing,
);

export const Loot = new Card(
  'Loot',
  "There's a box with an item here! What could be inside?",
  LootImage,
  Actions.Loot,
  Actions.Nothing,
);

export const Monster = new Card(
  'Challenge!',
  'A violent, yet respectful, duel between you and a creature that does not like you.',
  StaffImage,
  Actions.StartBattle,
  Actions.Nothing,
);
