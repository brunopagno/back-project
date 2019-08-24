export default class RoundIndicator {
  constructor(rootElement) {
    this.element = document.createElement('div');
    this.element.id = 'current-round';

    rootElement.append(this.element);
  }

  draw(gameState) {
    console.log({ gameState });
    this.element.innerHTML = 'OPEN CONSOLE';
  }
}
