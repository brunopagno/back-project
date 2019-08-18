export default class SelectController {
  update(gameState, input) {
    const selectedIndex = input.selectedCard();
    const selectedCard = gameState.selectCard(selectedIndex);
    gameState.setCurrentEffect(selectedCard.getEffect());
  }

  hasFinished(gameState) {
    return !!gameState.getSelectedCard();
  }
}
