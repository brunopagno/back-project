class GameState {
  constructor(hero, initialMagics, hand) {
    this.hero = hero;
    initialMagics.forEach((magic) => {
      this.hero.addMagicToGrimoire(magic);
    });
    this.hand = hand;
    this.currentPhase = undefined;
  }

  setCurrentPhase(currentPhase) {
    this.currentPhase = currentPhase;
  }

  getCurrentPhase() {
    return this.currentPhase;
  }

  selectCard(index) {
    this.selectedCard = this.hand.cardAt(index);
  }

  getSelectedCard() {
    return this.selectedCard;
  }

  clearHand() {
    this.hand.discardAll();
  }

  clearSelectedCard() {
    this.selectedCard = undefined;
  }
}

export default GameState;
