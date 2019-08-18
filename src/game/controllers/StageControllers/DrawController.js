import DeckService from '../../services/DeckService';

export default class DrawController {
  update(gameState) {
    let count = 0;
    while (count < gameState.hand.size) {
      const card = DeckService.getNewCard();
      gameState.hand.addCard(card);
      count += 1;
    }
  }

  hasFinished() {
    return true;
  }
}