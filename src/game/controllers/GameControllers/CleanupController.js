export default class CleanupController {
  stageName() {
    return 'End Round';
  }

  update(gameState) {
    gameState.clearHand();
    gameState.clearSelectedCard();
    gameState.clearCurrentEffect();

    return gameState.getInitialStateController();
  }
}
