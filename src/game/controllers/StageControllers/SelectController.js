import GameInputService from '../../services/GameInputService';

export default class BeginRoundController {
  update(gameState) {
    const selectedIndex = GameInputService.selectedCard();

    gameState.selectCard(selectedIndex);
  }

  hasFinished(gameState) {
    return !!gameState.getSelectedCard();
  }
}
