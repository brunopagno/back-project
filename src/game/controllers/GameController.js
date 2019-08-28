import GameState from '../state/GameState';
import { getRandomCard } from '../util';
import * as CardList from '../data/cards';

class GameController {
  newGame() {
    GameState.initialize();
  }

  beginNewRound() {
    GameState.hand.discardAll();
    GameState.hand.clearSelection();
  }

  drawCards() {
    for (let cardsInHand = 0; cardsInHand < GameState.hand.size; cardsInHand += 1) {
      const card = getRandomCard(CardList);
      GameState.hand.addCard(card);
    }
  }

  selectCard(index) {
    if (!GameState.action) {
      GameState.hand.select(index);
    }
  }

  commitToCard() {
    GameState.action = GameState.hand.getSelectedCard().front;
  }

  activateCard() {
    const result = GameState.hand.getSelectedCard().executeFrontAction(GameState);
    console.log('FIGURE OUT WHAT TO DO WITH: ', result);
  }

  activateBackOfCard() {
    const result = GameState.hand.getSelectedCard().executeBackAction(GameState);
    console.log('FIGURE OUT WHAT TO DO WITH: ', result);
  }

  discardHand() {
    GameState.hand.discardAll();
  }

  gameOver() {
    console.log('GAME OVER =/');
    GameState.initialize();
  }
}

const instance = new GameController();
export default instance;
