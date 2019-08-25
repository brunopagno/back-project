import { createElement } from '../ViewHelper';
import MenuView from './MenuView';

export default class CaveView {
  constructor(baseElement) {
    this.baseElement = baseElement;

    const menuElement = createElement('div', 'menu-view');
    this.menuView = new MenuView(menuElement);
    this.baseElement.appendChild(menuElement);
  }

  draw(gameState) {
    this.menuView.draw(gameState);
  }
}
