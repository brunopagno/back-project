import { createElement, createButton } from '../ViewHelper';
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

      // if front draw this
      const selectedCardView = new SelectedCardView(selectedCardElement);
      this.baseElement.appendChild(selectedCardElement);
      selectedCardView.draw(gameState.hand.getSelectedCard());

      // if back then draw differently
      // here code for back

      if (gameState.action) {
        this.baseElement.appendChild(createElement('div', '', 'cave-action-description', gameState.action.description));
        this.baseElement.appendChild(createButton('', 'cave-action-ok', 'Continue', Router.activateCard));
      }
    }
  }
}
