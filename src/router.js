import Back from './back';
import GameController from './game/controllers/GameController';
import BattleController from './game/controllers/BattleController';

class Router {
  newGame() {
    GameController.newGame();
  }

  changeView(view) {
    Back.changeView(view, 'back');
  }

  drawCards() {
    GameController.drawCards();
    Back.draw();
  }

  discardHand() {
    GameController.discardHand();
    Back.draw();
  }

  selectCard(index) {
    GameController.selectCard(index);
    Back.draw();
  }

  commitToCard() {
    GameController.commitToCard();
    Back.draw();
  }

  activateCard() {
    GameController.activateCard();
    Back.draw();
  }

  activateBackOfCard() {
    GameController.activateBackOfCard();
    Back.draw();
  }

  cleanupRound() {
    GameController.cleanupRound();
    Back.draw();
  }

  selectMagic(index) {
    BattleController.selectMagic(index);
    BattleController.activateMagicCard();
    Back.draw();
  }

  activateBackOfMagic(resetTurn) {
    BattleController.activateBackOfMagicCard();
    BattleController.switchActorAndTarget();
    if (resetTurn) BattleController.resetTurn();
    Back.draw();
  }
}

const instance = new Router();

export default instance;
