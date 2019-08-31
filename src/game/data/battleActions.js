/* eslint-disable no-param-reassign */
import Action from '../entities/Action';
import { sampleFromRange } from '../util';

export function CauseDamage(min, max) {
  return new Action(
    'Cause damage',
    (gameState) => {
      gameState.battle.currentTarget.currentHealth -= sampleFromRange(min, max);
    },
  );
}

export const SayHiOnConsole = new Action(
  'Say hi on console :)',
  () => {
    console.log('Hi :)');
  },
);
