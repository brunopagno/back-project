export default class Hand {
  constructor(size) {
    this.cards = [];
    this.size = size;
    this.selectedCard = undefined;
  }

  addCard(card) {
    this.cards.push(card);
  }

  cardAt(index) {
    return this.cards[index];
  }

  discardAll() {
    this.cards = [];
  }

  select(index) {
    this.selectedCard = this.cardAt(index);
  }

  clearSelection() {
    this.selectedCard = undefined;
  }
}
