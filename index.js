import characterData from "./data.js";
import Character from "./Character.js";

const attackBtn = document.getElementById("attack-button");
attackBtn.addEventListener("click", attack);

function attack() {
  rollDices();
  takeDamage();
  checkHealth();
  render();

  if (wizard.dead || (monster.dead && monsterArray.length < 1)) {
    displayEndMessage();
    attackBtn.disabled = true;
  } else if (monster.dead && monsterArray.length > 0) {
    attackBtn.disabled = true;
    setTimeout(() => {
      monster = new Character(monsterArray.shift());
      render();
      attackBtn.disabled = false;
    }, 1500);
  }
}

function rollDices() {
  wizard.getRolledDices();
  monster.getRolledDices();
}

function takeDamage() {
  wizard.health -= monster.getDamage();
  monster.health -= wizard.getDamage();
}

function checkHealth() {
  if (wizard.health < 1) {
    wizard.dead = true;
    wizard.health = 0;
  }
  if (monster.health < 1) {
    monster.dead = true;
    monster.health = 0;
  }
}

function displayEndMessage() {
  let message;
  let emoji;

  if (wizard.dead && monster.dead) {
    message = "both are dead";
    emoji = "👹";
  } else if (wizard.dead) {
    message = "the monster has won";
    emoji = "👹";
  } else if (monster.dead) {
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

const monsterArray = [
  characterData.orc,
  characterData.demon,
  characterData.goblin,
];

const wizard = new Character(characterData.hero);
let monster = new Character(monsterArray.shift());

render();

function render() {
  document.getElementById("hero").innerHTML = wizard.renderCharacter(wizard);
  document.getElementById("monster").innerHTML =
    monster.renderCharacter(monster);
}
