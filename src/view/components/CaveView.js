import { createElement, createButton } from '../ViewHelper';
import Router from '../../router';
import SelectedCardView from './SelectedCardView';
import SelectedBackView from './SelectedBackView';

export default class CaveView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(gameState) {
    this.baseElement.innerHTML = '';

    if (!gameState.hand.hasCards()) {
      const caveButton = createElement('div', 'cave-button', '', 'Next!');
      caveButton.onclick = Router.drawCards;
      this.baseElement.appendChild(caveButton);
    }

    if (gameState.hand.hasSelectedCard()) {
      if (gameState.hand.hasSelectedCard && !gameState.hasBackAction()) {
        const selectedCardElement = createElement('div', 'cave-selected-card');

        const selectedCardView = new SelectedCardView(selectedCardElement);
        this.baseElement.appendChild(selectedCardElement);
        selectedCardView.draw(gameState.hand.getSelectedCard());

        if (gameState.frontAction && !gameState.frontAction.hasFinished()) {
          this.baseElement.appendChild(createElement('div', '', 'cave-action-description', gameState.frontAction.action.description));
          this.baseElement.appendChild(createButton('', 'cave-action-ok', 'Continue', Router.activateCard));
        }
      } else if (gameState.backAction) {
        const selectedBackElement = createElement('div', 'cave-selected-back');

        const selectedBackView = new SelectedBackView(selectedBackElement);
        this.baseElement.appendChild(selectedBackElement);
        selectedBackView.draw(gameState.hand.getSelectedCard());

        if (gameState.backAction.hasFinished()) {
          this.baseElement.appendChild(createButton('', 'cleanup-cave', 'Okay, finishing this round!', Router.cleanupRound));
        }
      }
    }
  }
}
