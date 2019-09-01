import Back from './back';
import GameController from './game/controllers/GameController';
import BattleController from './game/controllers/BattleController';

class Router {
  constructor() {
    this.views = {};
  }

  registerView(name, view) {
    this.views[name] = view;
  }

  newGame() {
    GameController.newGame();
  }

  changeView(view) {
    Back.changeView(this.views[view], 'back');
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
    Back.draw();
  }

  activateBackOfMagic(resetTurn) {
    BattleController.activateBackOfMagicCard(resetTurn);
    Back.draw();
  }

  finishBattle() {
    BattleController.finishBattle();
    Back.draw();
  }
}

const instance = new Router();

export default instance;
