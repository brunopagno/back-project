export default (gameState) => {
  gameState.clearHand();
  gameState.clearSelectedCard();

  return true;
};
