export default class Hand {
  constructor(size) {
    this.cards = [];
    this.size = size;
    this.selectedIndex = undefined;
  }

  addCard(card) {
    this.cards.push(card);
  }

  cardAt(index) {
    return this.cards[index];
  }

  hasCards() {
    return this.cards && this.cards.length > 0;
  }

  discardAll() {
    this.cards = [];
    this.selectedIndex = undefined;
  }

  select(index) {
    this.selectedIndex = index;
  }

  hasSelectedCard() {
    return this.selectedIndex !== undefined;
  }

  getSelectedCard() {
    return this.cardAt(this.selectedIndex);
  }

  clearSelection() {
    this.selectedIndex = undefined;
  }
}
