import { createElement } from '../ViewHelper';
import Router from '../../router';

export default class MenuView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(gameState) {
    this.baseElement.innerHTML = '';

    const drawCards = createElement('button', '', '', 'Draw Cards');
    if (gameState.hand.hasCards()) {
      drawCards.setAttribute('disabled', true);
    }
    drawCards.onclick = Router.drawCards;
    this.baseElement.appendChild(drawCards);

    const discardHand = createElement('button', '', '', 'Discard Hand');
    discardHand.onclick = Router.discardHand;
    this.baseElement.appendChild(discardHand);
  }
}
