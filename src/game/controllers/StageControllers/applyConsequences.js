export default (gameState) => {
  const effect = gameState.getSelectedCard().getEffect();
  if (effect.scriptedAction) {
    effect.scriptedAction(gameState);
  }

  return true;
};
