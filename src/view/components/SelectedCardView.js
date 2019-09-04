import { createElement, createImage } from '../ViewHelper';
import Router from '../../router';

export default class SelectedCardView {
  constructor(baseElement, onclick) {
    this.baseElement = baseElement;
    this.onclick = onclick;
  }

  draw(selectedCard) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('div', '', 'card-title card-title-big', selectedCard.name));
    this.baseElement.appendChild(createImage('card-image card-image-big', selectedCard.image));
    this.baseElement.appendChild(createElement('div', '', 'card-description', selectedCard.description));

    this.baseElement.onclick = Router.commitToCard;
  }
}
