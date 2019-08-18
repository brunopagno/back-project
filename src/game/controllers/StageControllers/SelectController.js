import GameInputService from '../../services/GameInputService';

export default class SelectController {
  update(gameState) {
    const selectedIndex = GameInputService.selectedCard();
    const selectedCard = gameState.selectCard(selectedIndex);
    gameState.setCurrentEffect(selectedCard.getEffect());
  }

  hasFinished(gameState) {
    return !!gameState.getSelectedCard();
  }
}
