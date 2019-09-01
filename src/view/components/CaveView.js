import { createElement, createButton, createMessage } from '../ViewHelper';
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
      const caveButton = createButton('Next!', Router.drawCards);
      this.baseElement.appendChild(caveButton);
    }

    if (gameState.hand.hasSelectedCard()) {
      if (gameState.hand.hasSelectedCard && !gameState.hasBackAction()) {
        const selectedCardElement = createElement('div', '', 'card card-big');

        const selectedCardView = new SelectedCardView(selectedCardElement);
        this.baseElement.appendChild(selectedCardElement);
        selectedCardView.draw(gameState.hand.getSelectedCard());

        if (gameState.frontAction && !gameState.frontAction.hasFinished()) {
          this.baseElement.appendChild(createMessage(gameState.frontAction.action.description));
          this.baseElement.appendChild(createButton('Continue', Router.activateCard));
        }
      } else if (gameState.backAction) {
        const selectedBackElement = createElement('div', '', 'card card-big');

        const selectedBackView = new SelectedBackView(selectedBackElement);
        this.baseElement.appendChild(selectedBackElement);
        selectedBackView.draw(gameState.hand.getSelectedCard());

        if (gameState.backAction.hasFinished()) {
          this.baseElement.appendChild(createButton('Okay, finishing this round!', Router.cleanupRound));
        }
      }
    }
  }
}
