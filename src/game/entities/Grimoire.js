export default class Grimoire {
  constructor(magics) {
    this.magics = magics || [];
  }

  addMagic(magic) {
    this.magics.push(magic);
  }

  getMagic(index) {
    return this.magics[index];
  }
}
