import DeckService from '../../services/DeckService';

export default (gameState) => {
  let count = 0;
  while (count < gameState.hand.size) {
    const card = DeckService.getNewCard();
    gameState.hand.addCard(card);
    count += 1;
  }

  return true;
};
