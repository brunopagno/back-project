export default class Battle {
  constructor(monster) {
    this.monster = monster;
    this.isFinished = false;

    this.currentActor = undefined;
    this.currentTarget = undefined;

    this.selectedMagic = undefined;
  }

  switchActorAndTarget() {
    const aux = this.currentActor;
    this.currentActor = this.currentTarget;
    this.currentTarget = aux;
  }

  setCurrentActor(living) {
    this.currentActor = living;
  }

  setCurrentTarget(living) {
    this.currentTarget = living;
  }

  hasSelectedMagic() {
    return !!this.selectedMagic;
  }

  selectMagic(card) {
    this.selectedMagic = card;
  }

  clearSelectedMagics() {
    this.selectedMagic = undefined;
  }

  finish() {
    this.isFinished = true;
  }
}
