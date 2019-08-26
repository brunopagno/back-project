import Router from '../router';
import CaveView from './components/CaveView';
import HandView from './components/HandView';
import HeroView from './components/HeroView';
import GameState from '../game/state/GameState';
import { createElement } from './ViewHelper';

class GameView {
  initialize(id) {
    Router.newGame();

    this.rootElement = document.getElementById(id);
    this.gameElement = createElement('div', 'game-view');
    const leftColumn = createElement('div', 'left-column');
    const rightColumn = createElement('div', 'right-column');

    this.caveElement = createElement('div', 'cave-view');
    leftColumn.appendChild(this.caveElement);
    this.caveView = new CaveView(this.caveElement);

    this.handElement = createElement('div', 'hand-view');
    leftColumn.appendChild(this.handElement);
    this.handView = new HandView(this.handElement);

    this.heroElement = createElement('div', 'hero-view');
    rightColumn.appendChild(this.heroElement);
    this.heroView = new HeroView(this.heroElement);

    this.gameElement.appendChild(leftColumn);
    this.gameElement.appendChild(rightColumn);
    this.rootElement.appendChild(this.gameElement);
  }

  draw() {
    console.log({ GameState });
    this.caveView.draw(GameState);
    this.handView.draw(GameState.hand.cards);
    this.heroView.draw(GameState.hero);
  }
}

const instance = new GameView();
export default instance;
