import Card from '../entities/Card';
import * as Actions from './actions';

export const Move = new Card(
  'Move',
  'Now is not the time to waste time.',
  Actions.Nothing,
  Actions.Nothing,
);

export const Staircase = new Card(
  'Staircase',
  'Go down one level. Monsters down there are stronger.',
  Actions.Nothing,
  Actions.Nothing,
);

export const Loot = new Card(
  'Loot',
  "There's a box with an item here! What could be inside?",
  Actions.Loot,
  Actions.Nothing,
);

export const Monster = new Card(
  'Monster',
  'A violent, yet respectful, duel between you and a creature that does not like you.',
  Actions.Battle,
  Actions.Nothing,
);
