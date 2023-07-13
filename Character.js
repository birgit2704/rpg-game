import { getRandomNumber } from "./utils.js";

class Character {
  constructor(data) {
    Object.assign(this, data);

    this.diceHtml = new Array(this.diceCount)
      .fill(0)
      .map(() => `<div class="placeholder-dice"></div>`)
      .join("");
  }

  getRolledDices() {
    this.randomNoArray = [];
    this.diceHtml = new Array(this.diceCount)
      .fill(0)
      .map(() => {
        let no = getRandomNumber();
        this.randomNoArray.push(no);
        return `<div class="dice">${no}</div>`;
      })
      .join("");
  }

  getDamage() {
    return this.randomNoArray.reduce((sum, el) => sum + el);
  }

  renderCharacter({ name, avatar, health, diceHtml }) {
    return `
        <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}"/>
          <p class="health">health: <b> ${health} </b></p>
          <div class="dice-container">
            ${diceHtml}
          </div>
        </div>     
      `;
  }
}

export default Character;
