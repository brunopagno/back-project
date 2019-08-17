import * as Cards from '../data/cards';
import { sample } from '../util';

class DeckService {
  static getNewCard() {
    return sample(Object.values(Cards));
  }
}

export default DeckService;
