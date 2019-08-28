import { createElement, createImage } from '../ViewHelper';
import Router from '../../router';

export default class CardView {
  constructor(baseElement, indexId) {
    this.baseElement = baseElement;
    this.indexId = indexId;
  }

  draw(classNamePrefix, name, image) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('div', '', `${classNamePrefix}-title`, name));
    this.baseElement.appendChild(createImage('', `${classNamePrefix}-image`, image));

    this.baseElement.onclick = () => Router.selectCard(this.indexId);
  }
}
