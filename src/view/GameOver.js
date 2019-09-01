class GameOver {
  initialize(id) {
    this.rootElement = document.getElementById(id);
    this.rootElement.innerHTML = '';
  }

  draw() {
    const gameOverMessage = document.createElement('div');
    gameOverMessage.innerHTML = 'It was an amazing run, but unfortunately you failed<br/><br/>Reload the page to try again.';
    this.rootElement.appendChild(gameOverMessage);
  }
}

const instance = new GameOver();
export default instance;
