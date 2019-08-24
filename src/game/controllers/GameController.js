import GameState from '../state/GameState';
import { getRandomCard } from '../util';
import * as CardList from '../data/cards';

export default class GameController {
  beginNewRound() {
    GameState.hand.discardAll();
    GameState.hand.clearSelection();
  }

  drawCards() {
    for (let cardsInHand = 0; cardsInHand < GameState.hand.size; cardsInHand += 1) {
      const card = getRandomCard(CardList);
      GameState.hand.addCard(card);
    }
  }

  selectCard(index) {
    GameState.hand.selectCard(index);
  }

  activateCard() {
    const result = GameState.hand.selectedCard.executeFrontAction();
    console.log('FIGURE OUT WHAT TO DO WITH: ', result);
  }

  activateBackOfCard() {
    const result = GameState.hand.selectedCard.executeBackAction();
    console.log('FIGURE OUT WHAT TO DO WITH: ', result);
  }

  gameOver() {
    console.log('GAME OVER =/');
    GameState.initialize();
  }
}
