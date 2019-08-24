import { createElement } from '../ViewHelper';

export default class HandView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(cards) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('h3', '', '', 'Hand'));
    const container = createElement('div', '', 'hand-view-container');

    if (cards && cards.length > 0) {
      cards.forEach((card) => {
        const cardElement = createElement('div', '', 'hand-card');
        cardElement.appendChild(createElement('div', '', 'hand-card-title', card.name));
        cardElement.appendChild(createElement('div', '', 'hand-card-description', card.description));
        container.appendChild(cardElement);
      });
    } else {
      container.innerText = 'No cards in hand.';
    }

    this.baseElement.appendChild(container);
  }
}
