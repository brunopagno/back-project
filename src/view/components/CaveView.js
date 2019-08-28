import { createElement } from '../ViewHelper';
import Router from '../../router';
// import MenuView from './MenuView';
import SelectedCardView from './SelectedCardView';

export default class CaveView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(gameState) {
    this.baseElement.innerHTML = '';

    if (!gameState.hand.hasCards()) {
      const caveButton = createElement('div', 'cave-button', '', 'Advance!');
      caveButton.onclick = Router.drawCards;
      this.baseElement.appendChild(caveButton);
    }

    if (gameState.hand.hasSelectedCard()) {
      const selectedCardElement = createElement('div', 'cave-selected-card');
      this.selectedCardView = new SelectedCardView(selectedCardElement);
      this.baseElement.appendChild(selectedCardElement);
      this.selectedCardView.draw(gameState.hand.getSelectedCard());
    }
  }
}
