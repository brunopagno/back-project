export default class Grimoire {
  constructor(magics) {
    this.magics = magics || [];
    this.selectedMagic = undefined;
  }

  addMagic(magic) {
    this.magics.push(magic);
  }

  getMagic(index) {
    return this.magics[index];
  }

  selectMagic(index) {
    this.selectedMagic = this.magics[index];
  }

  clearSelection() {
    this.selectedMagic = undefined;
  }
}
