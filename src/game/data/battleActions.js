/* eslint-disable no-param-reassign */
import { sampleFromRange } from '../util';

export function CauseDamage(min, max) {
  return function actuallyCauseDamage(_, target) {
    target.currentHealth -= sampleFromRange(min, max);
  };
}

export function SayHiOnConsole(gameState, target, owner) {
  console.log('Hi :)');
  console.log({ gameState, target, owner });
}
