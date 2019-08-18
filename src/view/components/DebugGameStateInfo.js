/* eslint-disable indent */
export default class DebugGameStateInfo {
  constructor(rootElement) {
    this.element = document.createElement('div');
    this.element.id = 'debug-game-state-info';

    rootElement.append(this.element);
  }

  draw(gameState) {
    this.element.innerHTML = this.stringifyGameState(gameState);
  }

  stringifyGameState(gameState) {
    return `
      CurrentPhase: <br />
      - name: ${gameState.getCurrentPhase()} </br>

      <hr />

      Hero: <br />
      - health: ${gameState.hero.health}  <br />
      - currentHealth: ${gameState.hero.currentHealth}  <br />
      - healthRegenRate: ${gameState.hero.healthRegenRate}  <br />
      - mana: ${gameState.hero.mana}  <br />
      - currentMana: ${gameState.hero.currentMana}  <br />
      - manaRegenRate: ${gameState.hero.manaRegenRate}  <br />
      - experience: ${gameState.hero.experience}  <br />
      <div style="margin-left: 24px">
        - activeMagics <br />
        <div style="margin-left: 24px">
          ${gameState.hero.grimoire.activeMagics.map((magic) => `
            - name: ${magic.name} <br />
            - description: ${magic.description} <br />
            - damage: ${magic.damage} <br />
            - duration: ${magic.duration} <br />
            - effect: ${magic.effect} <br />
          `).join('')}
        </div>
        - otherMagics <br />
        <div style="margin-left: 24px">
          ${gameState.hero.grimoire.otherMagics.map((magic) => `
            - name: ${magic.name} <br />
            - description: ${magic.description} <br />
            - damage: ${magic.damage} <br />
            - duration: ${magic.duration} <br />
            - effect: ${magic.effect} <br />
          `).join('')}
        </div>
      </div>

      <hr />

      Hand: <br />
      - cards <br />
      <div style="margin-left: 24px">
        ${gameState.hand.cards.map((card) => `
          - name: ${card.name} <br />
          - description: ${card.description} <br />
          - effect: ${card.effect.name} <br />
          - consequences: ${card.consequences.name} <br />
          <br />
        `).join('')}
      </div>
      - size <br />

      <hr />

      SelectedCard: <br />
      ${
        gameState.getSelectedCard()
        ? `
          - name: ${gameState.getSelectedCard().name} <br />
          - description: ${gameState.getSelectedCard().description} <br />
          - effect: ${gameState.getSelectedCard().effect.name} <br />
          - consequences: ${gameState.getSelectedCard().consequences.name} <br />
        `
        : '- no card selected <br />'
      }

      <hr />

      CurrentEffect: <br />
      - name: ${
        gameState.getCurrentEffect()
        ? `${gameState.getCurrentEffect().name}`
        : 'no effect selected'
      } <br />
    `;
  }
}
