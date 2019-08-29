import GameState from '../state/GameState';
import ActiveAction from '../entities/ActiveAction';
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
    if (!GameState.hasFrontAction()) {
      GameState.hand.select(index);
    }
  }

  commitToCard() {
    GameState.setFrontAction(new ActiveAction(GameState.hand.getSelectedCard().front));
  }

  activateCard() {
    const result = GameState.hand.getSelectedCard().executeFrontAction(GameState);
    GameState.frontAction.finished = true;
    this.commitToCardBack();
  }

  commitToCardBack() {
    GameState.setBackAction(new ActiveAction(GameState.hand.getSelectedCard().back));
  }

  activateBackOfCard() {
    const result = GameState.hand.getSelectedCard().executeBackAction(GameState);
    GameState.backAction.finished = true;
  }

  cleanupRound() {
    GameState.hand.discardAll();
    GameState.setFrontAction(undefined);
    GameState.setBackAction(undefined);
  }

  gameOver() {
    console.log('GAME OVER =/');
    GameState.initialize();
  }
}

const instance = new GameController();
export default instance;
