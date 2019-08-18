export default class GameState {
  constructor(hero, initialMagics, hand) {
    this.hero = hero;
    initialMagics.forEach((magic) => {
      this.hero.addMagicToGrimoire(magic);
    });
    this.hand = hand;
    this.currentPhase = undefined;
    this.currentEffect = undefined;
  }

  // Phase
  setCurrentPhase(currentPhase) {
    this.currentPhase = currentPhase;
  }

  getCurrentPhase() {
    return this.currentPhase;
  }

  // Hand
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

  // Effect
  getCurrentEffect() {
    return this.currentEffect;
  }

  setCurrentEffect(effect) {
    this.currentEffect = effect;
  }

  clearCurrentEffect() {
    this.currentEffect = undefined;
  }
}
