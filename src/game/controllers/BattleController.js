import GameState from '../state/GameState';

export default class BattleController {
  startBattle(battle) {
    GameState.battle = battle;
  }

  selectMagic(index, owner) {
    owner.grimoire.selectMagic(index);
  }

  activateMagicCard(card) {
    const result = card.executeFrontAction();
    console.log('FIGURE OUT WHAT TO DO WITH: ', result);
  }

  activateBackOfMagicCard(card) {
    const result = card.executeBackAction();
    console.log('FIGURE OUT WHAT TO DO WITH: ', result);
  }

  finishBattle() {
    console.log('BATTLE IS OVER: ', GameState.battle);
    GameState.battle = undefined;
  }
}
