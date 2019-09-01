import Router from '../../router';
import { createElement, createImage } from '../ViewHelper';

export default class GrimoireView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(magics) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('h3', '', '', 'Grimoire'));

    const grimoireMagicsElement = createElement('div', '', 'grimoire-magics');
    magics.forEach((magic, index) => {
      const magicElement = createElement('div', '', 'grimoire-magic ptr');
      magicElement.appendChild(createElement('div', '', 'grimoire-magic-title', magic.name));
      magicElement.appendChild(createElement('div', '', 'grimoire-magic-description', magic.description));
      magicElement.appendChild(createImage('grimoire-magic-action', magic.image));
      magicElement.onclick = () => Router.selectMagic(index);
      grimoireMagicsElement.appendChild(magicElement);
    });
    this.baseElement.appendChild(grimoireMagicsElement);
  }
}
