import GameInputService from '../../services/GameInputService';

export default (gameState) => {
  const selectedIndex = GameInputService.selectedCard();

  gameState.selectCard(selectedIndex);
  return !!gameState.getSelectedCard();
};
