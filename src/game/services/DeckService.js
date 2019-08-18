import * as Cards from '../data/cards';
import { sample } from '../util';

export default class DeckService {
  static getNewCard() {
    return sample(Object.values(Cards));
  }
}
