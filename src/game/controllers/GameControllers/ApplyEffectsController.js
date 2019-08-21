export default class ApplyEffectsController {
  stageName() {
    return 'Apply Effects';
  }

  constructor(nextController) {
    this.nextController = nextController;
  }

  update(gameState) {
    const effect = gameState.getCurrentEffect();

    if (!effect.hasScriptedAction() || effect.executeScriptedAction(gameState)) {
      return this.nextController;
    }

    return undefined;
  }
}
