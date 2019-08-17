class GameView {
  constructor(id) {
    this.rootElement = document.getElementById(id);
  }

  draw(gameState) {
    const nextState = document.createElement('p');
    nextState.innerHTML = gameState.getCurrentPhase();
    this.rootElement.appendChild(nextState);
  }
}

export default GameView;
