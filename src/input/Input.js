class Input {
  initialize(game) {
    this.game = game;
  }

  // eslint-disable-next-line camelcase
  debug__forceLoop() {
    this.game.loop();
  }

  selectedCard() {
    return 1;
  }
}

const input = new Input();

export default input;