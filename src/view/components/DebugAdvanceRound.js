import Router from '../../router';

export default class DebugAdvanceRound {
  constructor(rootElement) {
    this.element = document.createElement('button');
    this.element.id = 'debug-advance-round';
    this.element.innerHTML = 'Advance Round';
    this.element.onclick = this.action;

    rootElement.appendChild(this.element);
  }

  action() {
    Router.debug__advanceStage();
  }
}
