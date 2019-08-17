import GameController from './game/controllers/GameController';
import GameView from './view/GameView';

// this is the game class which will orchestrate the entire thing
class Back {
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

export default Back;
