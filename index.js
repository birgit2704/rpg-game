const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceRoll: [3, 1, 4],
  diceCount: 3,
};

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceRoll: [4],
  diceCount: 1,
};

function getDiceRollArray(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(
      () => `<div class="dice">
    ${Math.floor(Math.random() * 6) + 1}
    </div>`
    )
    .join("");
}

function renderCharacter({ elementId, name, avatar, health, diceCount }) {
  document.getElementById(elementId).innerHTML = `
   <div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src="${avatar}" />
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">
        ${getDiceRollArray(diceCount)}
      </div>
   </div>
`;
}

renderCharacter(hero);
renderCharacter(monster);
