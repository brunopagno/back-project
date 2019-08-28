import { createElement } from '../ViewHelper';
import MenuView from './MenuView';
import SelectedCardView from './SelectedCardView';

export default class CaveView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(gameState) {
    this.baseElement.innerHTML = '';

    const menuElement = createElement('div', 'menu-view');
    this.menuView = new MenuView(menuElement);
    this.baseElement.appendChild(menuElement);
    this.menuView.draw(gameState);

    if (gameState.hand.hasSelectedCard()) {
      const selectedCardElement = createElement('div', 'cave-selected-card');
      this.selectedCardView = new SelectedCardView(selectedCardElement);
      this.baseElement.appendChild(selectedCardElement);
      this.selectedCardView.draw(gameState.hand.getSelectedCard());
    }
  }
}
