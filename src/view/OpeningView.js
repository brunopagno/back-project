import Router from '../router';

class OpeningView {
  initialize(id) {
    this.rootElement = document.getElementById(id);
    this.rootElement.innerHTML = '';
  }

  draw() {
    const startGameButton = document.createElement('button');
    startGameButton.onclick = () => Router.changeView('GameView');
    this.rootElement.appendChild(startGameButton);
  }
}

const instance = new OpeningView();
export default instance;
