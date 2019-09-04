import { createElement } from '../ViewHelper';
import CardView from './CardView';

export default class HandView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(hand) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('h3', '', '', 'Hand'));
    const container = createElement('div', '', 'hand-view-container');

    if (hand.cards && hand.cards.length > 0) {
      hand.cards.forEach((card, index) => {
        const cardElement = createElement('div', '', 'card card-borders');
        if (hand.hasSelectedCard() && index !== hand.selectedIndex) {
          cardElement.setAttribute('disabled', true);
        }
        const cardView = new CardView(cardElement, index);
        cardView.draw(card.name, card.image);
        container.appendChild(cardElement);
      });
    } else {
      container.innerText = 'No cards in hand.';
    }

    this.baseElement.appendChild(container);
  }
}
