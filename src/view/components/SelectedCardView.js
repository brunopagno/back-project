import { createElement, createImage } from '../ViewHelper';
import Router from '../../router';

export default class SelectedCardView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(selectedCard) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('div', '', 'cave-selected-card-title', selectedCard.name));
    this.baseElement.appendChild(createImage('', 'cave-selected-card-image', selectedCard.image));
    this.baseElement.appendChild(createElement('div', '', 'cave-selected-card-description', selectedCard.description));

    this.baseElement.onclick = Router.activateCard;
  }
}
