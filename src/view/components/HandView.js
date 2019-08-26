import { createElement } from '../ViewHelper';
import CardView from './CardView';

export default class HandView {
  constructor(baseElement) {
    this.baseElement = baseElement;
    this.className = 'hand-card';
  }

  draw(cards) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('h3', '', '', 'Hand'));
    const container = createElement('div', '', 'hand-view-container');

    if (cards && cards.length > 0) {
      cards.forEach((card, index) => {
        const cardElement = createElement('div', '', this.className);
        const cardView = new CardView(cardElement, index);
        cardView.draw(this.className, card.name, card.description);
        container.appendChild(cardElement);
      });
    } else {
      container.innerText = 'No cards in hand.';
    }

    this.baseElement.appendChild(container);
  }
}
