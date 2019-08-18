export default class Effect {
  constructor(name, scriptedAction) {
    this.name = name;
    this.scriptedAction = scriptedAction;
  }

  hasScriptedAction() {
    return this.scriptedAction;
  }

  executeScriptedAction(gameState) {
    return this.scriptedAction(gameState);
  }
}
