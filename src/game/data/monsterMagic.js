import Card from '../entities/Card';
import * as BattleActions from './battleActions';

export function WeirdSlide() {
  return new Card(
    'WeirdSlide',
    'A weird slide that touches you and somewhat hurts.',
    undefined,
    BattleActions.CauseDamage(1, 2),
    BattleActions.SayHiOnConsole,
  );
}

export function WeirdHug() {
  return new Card(
    'weridHug',
    'A weird slide that embraces you and somewhat hurts.',
    undefined,
    BattleActions.CauseDamage(2, 5),
    BattleActions.SayHiOnConsole,
  );
}
