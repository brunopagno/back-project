import { createElement } from '../ViewHelper';

export default class StatusView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(hero) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(
      createElement('div', '', 'hero-health',
        `Health: ${hero.currentHealth}/${hero.health}`),
    );

    this.baseElement.appendChild(
      createElement('div', '', 'hero-mana',
        `Mana: ${hero.currentMana}/${hero.mana}`),
    );

    this.baseElement.appendChild(
      createElement('div', '', 'hero-experience',
        `Exp: ${hero.experience}`),
    );
  }
}
