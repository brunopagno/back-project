import Card from '../entities/Card';
import * as BattleActions from './battleActions';

export const MagicPunch = new Card(
  'Magic Punch',
  'A magical fist appears out of thin air and punches enemies in the face.',
  BattleActions.CauseDamage(4, 6),
  [
    BattleActions.SayHiOnConsole,
    BattleActions.CauseDamage(0, 1),
  ],
);

export const FireBall = new Card(
  'Fireball!',
  'A burning ball of incandescent flames cuts the air in the direction of your enemies',
  BattleActions.CauseDamage(8, 13),
  BattleActions.SayHiOnConsole,
);
