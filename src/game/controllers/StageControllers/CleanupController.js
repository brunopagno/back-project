export default class CleanupController {
  update(gameState) {
    gameState.clearHand();
    gameState.clearSelectedCard();
    gameState.clearCurrentEffect();
  }

  hasFinished() {
    return true;
  }
}
