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
      const cardElement = createElement('div', '', 'card-holder');
      this.cardElementInner = createElement('div', '', 'card-inner');
      if (gameState.backAction && gameState.backAction.hasFinished()) {
        this.cardElementInner.classList.add('flipped');
      }

      const cardFront = createElement('div', '', 'card-front');
      const selectedCardElement = createElement('div', '', 'card');
      cardFront.appendChild(selectedCardElement);

      const selectedCardView = new SelectedCardView(selectedCardElement);
      selectedCardView.draw(gameState.hand.getSelectedCard());

      const cardBack = createElement('div', '', 'card-back');
      const selectedBackElement = createElement('div', '', 'card');
      cardBack.appendChild(selectedBackElement);

      const selectedBackView = new SelectedBackView(selectedBackElement);
      selectedBackView.draw(gameState.hand.getSelectedCard());

      this.cardElementInner.appendChild(cardFront);
      this.cardElementInner.appendChild(cardBack);
      cardElement.appendChild(this.cardElementInner);

      this.baseElement.appendChild(cardElement);

      if (gameState.frontAction && !gameState.frontAction.hasFinished()) {
        this.baseElement.appendChild(createMessage(gameState.frontAction.action.description));
        this.baseElement.appendChild(createButton('Continue', Router.activateCard));
      }

      if (gameState.backAction && gameState.backAction.hasFinished()) {
        this.baseElement.appendChild(createButton('Okay, finishing this round!', Router.cleanupRound));
      }
    }
  }

  afterDraw(gameState) {
    if (gameState.frontAction
        && gameState.frontAction.hasFinished()
        && gameState.backAction
        && !gameState.backAction.hasFinished()) {
      this.cardElementInner.classList.toggle('flipped');
    }
  }
}
