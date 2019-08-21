import ApplyEffectsController from './ApplyEffectsController';
import FlipCardController from './FlipCardController';

export default class SelectController {
  stageName() {
    return 'Select';
  }

  update(gameState, input) {
    const selectedIndex = input.selectedCard();
    const selectedCard = gameState.selectCard(selectedIndex);
    gameState.setCurrentEffect(selectedCard.getEffect());

    if (gameState.getSelectedCard()) {
      return new ApplyEffectsController(new FlipCardController());
    }
    return undefined;
  }
}
