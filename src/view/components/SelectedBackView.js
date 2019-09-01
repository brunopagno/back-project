import { createElement } from '../ViewHelper';
import Router from '../../router';

export default class SelectedBackView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(selectedCard) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('div', '', 'card-title card-title-big', selectedCard.name));
    this.baseElement.appendChild(createElement('div', '', 'card-description', selectedCard.back.description));

    this.baseElement.onclick = Router.activateBackOfCard;
  }
}
