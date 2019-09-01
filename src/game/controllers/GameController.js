import GameState from '../state/GameState';
import ActiveAction from '../entities/ActiveAction';
import Battle from '../entities/Battle';
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
    if (result instanceof Battle) {
      this.startBattle(result);
    }
    this.finishActiveCard();
  }

  startBattle(battle) {
    GameState.battle = battle;
    GameState.battle.setCurrentActor(GameState.hero);
    GameState.battle.setCurrentTarget(battle.monster);
  }

  finishActiveCard() {
    GameState.frontAction.finished = true;
    this.commitToCardBack();
  }

  commitToCardBack() {
    GameState.setBackAction(new ActiveAction(GameState.hand.getSelectedCard().back));
  }

  activateBackOfCard() {
    const result = GameState.hand.getSelectedCard().executeBackAction(GameState);
    if (result instanceof Battle) {
      this.startBattle(result);
    }
    GameState.backAction.finished = true;
  }

  cleanupRound() {
    GameState.hand.discardAll();
    GameState.setFrontAction(undefined);
    GameState.setBackAction(undefined);
  }

  gameOver() {
    GameState.initialize();
  }
}

const instance = new GameController();
export default instance;
