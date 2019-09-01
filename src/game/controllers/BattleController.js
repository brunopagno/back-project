import GameState from '../state/GameState';
import ActiveAction from '../entities/ActiveAction';

class BattleController {
  selectMagic(index) {
    if (!GameState.battle.hasSelectedMagic()) {
      GameState.battle.selectMagic(
        new ActiveAction(GameState.battle.currentActor.grimoire.getMagic(index)),
      );
      this.activateMagicCard();
    }
  }

  activateMagicCard() {
    GameState.battle.selectedMagic.action.executeFrontAction(GameState);
    GameState.battle.selectedMagic.finished = true;

    this.verifyIfBattleEnded();
  }

  activateBackOfMagicCard(resetTurn) {
    GameState.battle.selectedMagic.action.executeBackAction(GameState);
    GameState.battle.selectedMagic.finished = true;

    this.switchActorAndTarget();
    if (resetTurn) this.resetTurn();
  }

  switchActorAndTarget() {
    GameState.battle.switchActorAndTarget();
  }

  resetTurn() {
    GameState.battle.clearSelectedMagics();
  }

  verifyIfBattleEnded() {
    if (GameState.hero.isDead() || GameState.battle.monster.isDead()) {
      GameState.battle.finish();
    }
  }

  finishBattle() {
    GameState.battle = undefined;
  }
}

const instance = new BattleController();
export default instance;
