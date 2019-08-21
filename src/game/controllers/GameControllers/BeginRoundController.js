import DrawController from './DrawController';

export default class BeginRoundController {
  stageName() {
    return 'Begin Round';
  }

  update() {
    return new DrawController();
  }
}
