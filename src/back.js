import GameController from './game/controllers/GameController';
import GameView from './view/GameView';

export default class Back {
  init() {
    this.gameController = new GameController();
  }

  update() {
    this.gameController.update();
  }

  initRenderer(id) {
    this.gameView = new GameView(id);
  }

  draw() {
    this.gameView.draw(this.gameController.getGameState());
  }
}
