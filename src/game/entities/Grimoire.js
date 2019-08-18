export default class Grimoire {
  constructor() {
    this.activeMagics = [];
    this.otherMagics = [];
  }

  addMagic(magic) {
    this.otherMagics.push(magic);
  }
}
