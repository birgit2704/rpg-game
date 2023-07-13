import characterData from "./data.js";
import Character from "./Character.js";

const attackBtn = document.getElementById("attack-button");

attackBtn.addEventListener("click", attack);

function attack() {
  rollDices();
  takeDamage();
  checkHealth();
  render();
  if (wizard.dead || orc.dead) {
    // && mosterArray.length < 1
    displayEndMessage();
    attackBtn.disabled = true;
  }
  //else next monster
}

function rollDices() {
  wizard.getRolledDices();
  orc.getRolledDices();
}

function takeDamage() {
  wizard.health -= orc.getDamage();
  orc.health -= wizard.getDamage();
}

function checkHealth() {
  if (wizard.health < 1) {
    wizard.dead = true;
    wizard.health = 0;
  }
  if (orc.health < 1) {
    orc.dead = true;
    orc.health = 0;
  }
}

function displayEndMessage() {
  let message;
  let emoji;

  if (wizard.dead && orc.dead) {
    message = "both are dead";
    emoji = "👹";
  } else if (wizard.dead) {
    message = "the monster has won";
    emoji = "👹";
  } else if (orc.dead) {
    message = "the wizard has won";
    emoji = "🧙‍♂️";
  }

  setTimeout(() => {
    return (document.body.innerHTML = `
    <div class="end-game">
                      <h2>Game Over</h2> 
                      <h3>${message}</h3>
                      <p class="end-emoji">${emoji}</p>
                  </div>
    `);
  }, 1500);
}

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.orc);

render();

function render() {
  document.getElementById("hero").innerHTML = wizard.renderCharacter(wizard);
  document.getElementById("monster").innerHTML = wizard.renderCharacter(orc);
}
