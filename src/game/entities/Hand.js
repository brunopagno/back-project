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

  hasCards() {
    return this.cards && this.cards.length > 0;
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
