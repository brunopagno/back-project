export default class ApplyEffectsController {
  constructor() {
    this.finished = false;
  }

  update(gameState) {
    const effect = gameState.getCurrentEffect();

    if (effect.hasScriptedAction()) {
      this.finished = effect.executeScriptedAction(gameState);
    } else {
      this.finished = true;
    }
  }

  hasFinished() {
    return this.finished;
  }
}
