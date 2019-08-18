import * as Cards from '../data/cards';
import { sample } from '../util';

class DeckService {
  getNewCard() {
    return sample(Object.values(Cards));
  }
}

const deckService = new DeckService();

export default deckService;
