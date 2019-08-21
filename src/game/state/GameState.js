export default class GameState {
  constructor(hero, initialMagics, hand, initialStateController) {
    this.hero = hero;
    initialMagics.forEach((magic) => {
      this.hero.addMagicToGrimoire(magic);
    });
    this.hand = hand;
    this.initialStateController = initialStateController;
    this.currentStage = undefined;
    this.selectedCard = undefined;
    this.currentEffect = undefined;
  }

  getHero() {
    return this.hero;
  }

  getInitialStateController() {
    return this.initialStateController;
  }

  // Phase
  setCurrentStage(currentStage) {
    this.currentStage = currentStage;
  }

  getCurrentStage() {
    return this.currentStage;
  }

  // Hand
  selectCard(index) {
    this.selectedCard = this.hand.cardAt(index);
    return this.selectedCard;
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
