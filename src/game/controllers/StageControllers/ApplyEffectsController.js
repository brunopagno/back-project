export default class FlipCardController {
  update(gameState) {
    let effect = gameState.getCurrentEffect();
    if (!effect) {
      effect = gameState.getSelectedCard().getEffect();
      gameState.setCurrentEffect(effect);
    }

    if (effect.hasScriptedAction()) {
      const result = effect.executeScriptedAction(gameState);
    }
  }

  hasFinished() {
    return false;
  }
}
