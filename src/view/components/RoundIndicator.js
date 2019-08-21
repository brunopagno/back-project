export default class RoundIndicator {
  constructor(rootElement) {
    this.element = document.createElement('div');
    this.element.id = 'current-round';

    rootElement.append(this.element);
  }

  draw(gameState) {
    this.element.innerHTML = gameState.getCurrentStage().stageName();
  }
}
