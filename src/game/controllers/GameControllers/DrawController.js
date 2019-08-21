import DeckService from '../../services/DeckService';
import SelectController from './SelectController';

export default class DrawController {
  stageName() {
    return 'Draw';
  }

  update(gameState) {
    let count = 0;
    while (count < gameState.hand.size) {
      const card = DeckService.getNewCard();
      gameState.hand.addCard(card);
      count += 1;
    }

    return new SelectController();
  }
}
