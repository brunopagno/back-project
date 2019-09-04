import Router from '../router';
import CaveView from './components/CaveView';
import HandView from './components/HandView';
import HeroView from './components/HeroView';
import GameState from '../game/state/GameState';
import { createElement } from './ViewHelper';

class GameView {
  initialize(id) {
    this.rootElement = document.getElementById(id);
  }

  draw() {
    if (GameState.battle) {
      Router.changeView('BattleView');
      return;
    }
    this.rootElement.innerHTML = '';

    const gameElement = createElement('div', 'game-view');
    const leftColumn = createElement('div', 'left-column');
    const rightColumn = createElement('div', 'right-column');

    const caveElement = createElement('div', 'cave-view');
    leftColumn.appendChild(caveElement);
    this.caveView = new CaveView(caveElement);

    const handElement = createElement('div', 'hand-view');
    leftColumn.appendChild(handElement);
    const handView = new HandView(handElement);

    const heroElement = createElement('div', 'hero-view');
    rightColumn.appendChild(heroElement);
    const heroView = new HeroView(heroElement);

    gameElement.appendChild(leftColumn);
    gameElement.appendChild(rightColumn);
    this.rootElement.appendChild(gameElement);

    this.caveView.draw(GameState);
    handView.draw(GameState.hand);
    heroView.draw(GameState.hero);
  }

  afterDraw() {
    this.caveView.afterDraw(GameState);
  }
}

const instance = new GameView();
export default instance;
