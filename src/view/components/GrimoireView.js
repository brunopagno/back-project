import { createElement, createImage } from '../ViewHelper';

export default class GrimoireView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(magics) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('h3', '', '', 'Grimoire'));

    const grimoireMagicsElement = createElement('div', '', 'grimoire-magics');
    if (magics && magics.length > 0) {
      magics.forEach((magic) => {
        const magicElement = createElement('div', '', 'grimoire-magic');
        magicElement.appendChild(createImage('card-image', magic.image));
        magicElement.appendChild(createElement('div', '', 'card-title', magic.name));
        grimoireMagicsElement.appendChild(magicElement);
      });
      this.baseElement.appendChild(grimoireMagicsElement);
    } else {
      this.baseElement.innerText = 'No magics in grimoire.';
    }
  }
}
