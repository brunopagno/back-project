import Card from '../entities/Card';
import * as Effects from './effects';

export const Move = new Card(
  'Move',
  'It is not time to waste time.',
  Effects.Nothing,
  Effects.Nothing,
);

export const Staircase = new Card(
  'Staircase',
  'Go down one level. Monsters down there are stronger.',
  Effects.Nothing,
  Effects.Nothing,
);

export const Loot = new Card(
  'Loot',
  "There's a box with an item here! What could be inside?",
  Effects.Loot,
  Effects.Nothing,
);
