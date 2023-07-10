import characters from "./data.js";
import Character from "./Character.js";

const wizard = new Character(characters.hero);
const orc = new Character(characters.monster);

function render() {
  document.getElementById("hero").innerHTML = wizard.renderCharacterHtml();
  document.getElementById("monster").innerHTML = orc.renderCharacterHtml();
}

render();
