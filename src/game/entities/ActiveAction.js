export default class ActiveAction {
  constructor(action) {
    this.action = action;
    this.finished = false;
  }

  hasFinished() {
    return this.finished;
  }
}
