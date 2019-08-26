import { createElement } from '../ViewHelper';
import Router from '../../router';

export default class CardView {
  constructor(baseElement, indexId) {
    this.baseElement = baseElement;
    this.indexId = indexId;
  }

  draw(classNamePrefix, name, description) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('div', '', `${classNamePrefix}-title`, name));
    this.baseElement.appendChild(createElement('div', '', `${classNamePrefix}-description`, description));

    this.baseElement.onclick = () => Router.selectCard(this.indexId);
  }
}
