import Back from './back';
import GameController from './game/controllers/GameController';

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
}

const instance = new Router();

export default instance;
