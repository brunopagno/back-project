import GameController from './game/controllers/GameController';
import GameView from './view/GameView';
import Input from './input/Input';

class Back {
  initialize(id) {
    this.initInput();
    this.initEngine();
    this.initRenderer(id);
  }

  loop() {
    this.update();
    this.draw();
  }

  initEngine() {
    this.gameController = new GameController();
  }

  initRenderer(id) {
    this.gameView = new GameView(id);
  }

  initInput() {
    Input.initialize(this);
  }

  update() {
    this.gameController.update(Input);
  }

  draw() {
    this.gameView.draw(this.gameController.getGameState());
  }
}

const game = new Back();

export default game;
