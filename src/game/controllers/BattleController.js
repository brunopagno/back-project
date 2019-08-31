import GameState from '../state/GameState';
import ActiveAction from '../entities/ActiveAction';

class BattleController {
  selectMagic(index) {
    GameState.battle.setCurrentMagic(
      new ActiveAction(GameState.battle.currentActor.grimoire.getMagic(index)),
    );
  }

  activateMagicCard() {
    GameState.battle.selectedMagic.action.executeFrontAction(GameState);
    GameState.battle.selectedMagic.finished = true;
  }

  activateBackOfMagicCard() {
    GameState.battle.selectedMagic.action.executeBackAction(GameState);
    GameState.battle.selectedMagic.finished = true;
  }

  switchActorAndTarget() {
    GameState.battle.switchActorAndTarget();
  }

  resetTurn() {
    GameState.battle.clearSelectedMagics();
  }

  finishBattle() {
    console.log('BATTLE IS OVER: ', GameState.battle);
    GameState.battle = undefined;
  }
}

const instance = new BattleController();
export default instance;
