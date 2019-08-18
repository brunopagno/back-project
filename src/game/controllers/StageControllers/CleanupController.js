export default class FlipCardController {
  update(gameState) {
    gameState.clearHand();
    gameState.clearSelectedCard();
    gameState.clearCurrentEffect();
  }

  hasFinished() {
    return true;
  }
}
