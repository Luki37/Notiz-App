let cardList = [];

const wrapper = document.getElementById("wrapper");
const deleteBtn = document.getElementById("delete");
const saveBtn = document.getElementById("save");
let inputTitle = document.getElementById("input-title");
let inputContent = document.getElementById("input-content");

function saveListToLocalstorage() {
  localStorage.setItem("cardList", JSON.stringify(cardList));
}

/* objekte aus der listen nehmen und darstellen */

/* eine neue notiz erfassen und in der Liste speichern */

/* eine bestehende notiz anwählen und im inputfeld weiter bearbeiten */
