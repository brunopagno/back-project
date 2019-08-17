class Hand {
  constructor(size) {
    this.cards = [];
    this.size = size;
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
}

export default Hand;
