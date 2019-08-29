import { createElement } from '../ViewHelper';
import Router from '../../router';

export default class SelectedBackView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(selectedCard) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('div', '', 'cave-selected-back-title', selectedCard.name));
    this.baseElement.appendChild(createElement('div', '', 'cave-selected-back-description', 'THIS IS THE BACK OF THE CARD'));
    this.baseElement.appendChild(createElement('div', '', 'cave-action-back-description', selectedCard.back.description));

    this.baseElement.onclick = Router.activateBackOfCard;
  }
}
