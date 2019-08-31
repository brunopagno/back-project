import { createElement, createImage } from '../ViewHelper';
import Router from '../../router';

export default class CardView {
  constructor(baseElement, indexId) {
    this.baseElement = baseElement;
    this.indexId = indexId;
  }

  draw(name, image) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('div', '', 'card-title', name));
    const imageHolderElement = createElement('div', '', 'card-image-holder');
    imageHolderElement.appendChild(createImage('', 'card-image', image));
    this.baseElement.appendChild(imageHolderElement);

    this.baseElement.onclick = () => Router.selectCard(this.indexId);
  }
}
