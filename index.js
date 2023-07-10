import characters from "./data.js";

function getDiceRollArray(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
}

function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount)
    .map((dice) => `<div class="dice">${dice}</div>`)
    .join("");
}

function renderCharacter({ elementId, name, avatar, health, diceCount }) {
  const diceHtml = getDiceHtml(diceCount);
  document.getElementById(elementId).innerHTML = `
   <div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src="${avatar}" />
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">
        ${diceHtml}
      </div>
   </div>
`;
}

renderCharacter(characters.hero);
renderCharacter(characters.monster);
