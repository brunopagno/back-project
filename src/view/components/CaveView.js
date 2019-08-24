export default class CaveView {
  constructor(baseElement) {
    this.baseElement = baseElement;
    this.baseElement.innerHTML = '';
  }

  draw() {
    this.baseElement.innerText = "I'm supposed to render monsters and action stuff.";
  }
}
