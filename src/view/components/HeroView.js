import { createElement } from '../ViewHelper';
import StatusView from './StatusView';
import GrimoireView from './GrimoireView';

export default class HeroView {
  constructor(baseElement) {
    this.baseElement = baseElement;
  }

  draw(hero) {
    this.baseElement.innerHTML = '';

    const statusElement = createElement('status', 'status-view');
    this.baseElement.appendChild(statusElement);
    const statusView = new StatusView(statusElement);
    statusView.draw(hero);

    const grimoireElement = createElement('grimoire', 'grimoire-view');
    this.baseElement.appendChild(grimoireElement);
    const grimoireView = new GrimoireView(grimoireElement);
    grimoireView.draw(hero.grimoire.magics);
  }
}
