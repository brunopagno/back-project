export default class FlipCardController {
  update(gameState) {
    const selectedCard = gameState.getSelectedCard();
    gameState.setCurrentEffect(selectedCard.getConsequences());
  }

  hasFinished() {
    return true;
  }
}
