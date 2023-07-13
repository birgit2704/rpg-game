import { getRandomNumber } from "./utils.js";

class Character {
  constructor(data) {
    Object.assign(this, data);

    this.diceHtml = new Array(this.diceCount)
      .fill(0)
      .map(() => `<div class="placeholder-dice"></div>`)
      .join("");

    this.maxHealth = this.health;
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

  renderCharacter({ name, avatar, health, diceHtml, maxHealth }) {
    let percent = (health / maxHealth) * 100;
    return `
        <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}"/>
          <p class="health">health: <b> ${health} </b></p>
          <div class="health-bar-outer">
                    <div class="health-bar-inner ${
                      percent < 26 ? "danger" : ""
                    }" 
                    style="width:${percent}%;">
                    </div>
                </div>
          <div class="dice-container">
            ${diceHtml}
          </div>
        </div>     
      `;
  }
}

export default Character;
