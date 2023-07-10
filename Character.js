import { getDiceRollArray } from "./utils.js";

function Character(data) {
  Object.assign(this, data);

  this.getDiceHtml = function () {
    return getDiceRollArray(this.diceCount)
      .map((dice) => `<div class="dice">${dice}</div>`)
      .join("");
  };

  this.renderCharacterHtml = function () {
    const diceHtml = this.getDiceHtml(this.diceCount);
    const { name, avatar, health } = this;
    return `
     <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}" />
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">
          ${diceHtml}
        </div>
     </div>
  `;
  };
}

export default Character;
