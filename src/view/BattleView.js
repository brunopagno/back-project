import Router from '../router';
import GameState from '../game/state/GameState';
import Monster from '../game/entities/Monster';
import GrimoireBattleView from './components/GrimoireBattleView';
import MonsterView from './components/MonsterView';
import StatusView from './components/StatusView';
import { createElement, createButton } from './ViewHelper';

class BattleView {
  initialize(id) {
    this.rootElement = document.getElementById(id);
  }

  draw() {
    if (!GameState.battle) {
      if (GameState.hero.isDead()) {
        Router.changeView('GameOver');
      } else {
        Router.changeView('GameView');
      }
      return;
    }

    this.rootElement.innerHTML = '';
    const battleElement = createElement('div', 'battle-view');

    const statusElement = createElement('status', 'status-view');
    const statusView = new StatusView(statusElement);
    statusView.draw(GameState.hero);
    battleElement.appendChild(statusElement);

    if (GameState.battle.isFinished) {
      const resultElement = createElement('div', 'battle-results');
      if (GameState.hero.isDead()) {
        resultElement.innerText = 'You were defeated =/';
      } else {
        resultElement.innerText = 'You defeated the monster!';
      }
      battleElement.appendChild(resultElement);
      battleElement.appendChild(createButton('Continue to cave', () => Router.finishBattle('GameView')));
    } else {
      const monsterElement = createElement('div', 'battle-monster');
      const monsterView = new MonsterView(monsterElement);
      monsterView.draw(GameState.battle.monster);
      battleElement.appendChild(monsterElement);

      if (GameState.battle.currentActor instanceof Monster) {
        if (GameState.battle.selectedMagic && GameState.battle.selectedMagic.hasFinished()) {
          const continueButton = createButton('continue with monster back', () => Router.activateBackOfMagic(true));
          battleElement.appendChild(continueButton);
        } else {
          const continueButton = createButton('continue with monster stuff', () => Router.selectMagic(GameState.battle.currentActor.randomMagicIndex()));
          battleElement.appendChild(continueButton);
        }
      } else if (GameState.battle.selectedMagic && GameState.battle.selectedMagic.hasFinished()) {
        const continueButton = createButton('continue', Router.activateBackOfMagic);
        battleElement.appendChild(continueButton);
      }

      const grimoireElement = createElement('div', 'battle-grimoire');
      const grimoireView = new GrimoireBattleView(grimoireElement);
      grimoireView.draw(GameState.hero.grimoire.magics);
      battleElement.appendChild(grimoireElement);
    }

    this.rootElement.appendChild(battleElement);
  }
}

const instance = new BattleView();
export default instance;
