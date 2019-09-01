import { createElement, createImage } from '../ViewHelper';

export default class MonsterView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(monster) {
    this.baseElement.innerHTML = '';

    this.baseElement.appendChild(createElement('div', '', 'battle-monster-title', monster.name));
    this.baseElement.appendChild(createElement('div', '', 'battle-monster-description', monster.description));

    this.baseElement.appendChild(createElement('div', '', 'battle-monster-health', `${monster.currentHealth}/${monster.health}`));
    this.baseElement.appendChild(createImage('battle-monster-image', monster.image));
  }
}
