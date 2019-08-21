export default class Grimoire {
  constructor(magics) {
    this.activeMagics = [];
    this.otherMagics = magics || [];
  }

  addMagic(magic) {
    this.otherMagics.push(magic);
  }

  getMagic(index) {
    return this.otherMagics[index];
  }
}
