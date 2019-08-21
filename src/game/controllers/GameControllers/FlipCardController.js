import ApplyEffectsController from './ApplyEffectsController';
import CleanupController from './CleanupController';

export default class FlipCardController {
  stageName() {
    return 'Flip';
  }

  update(gameState) {
    const selectedCard = gameState.getSelectedCard();
    gameState.setCurrentEffect(selectedCard.getConsequences());

    return new ApplyEffectsController(new CleanupController());
  }
}
