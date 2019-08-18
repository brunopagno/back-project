export default class FlipCardController {
  update(gameState) {
    const effect = gameState.getSelectedCard().getEffect();
    if (effect.scriptedAction) {
      effect.scriptedAction(gameState);
    }
  }

  hasFinished() {
    return true;
  }
}
