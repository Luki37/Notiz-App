let cardList = [];

let newCardList = JSON.parse(localStorage.getItem("cardList"));

const wrapper = document.getElementById("wrapper");
let inputTitle = document.getElementById("input-title");
let inputContent = document.getElementById("input-content");

renderCard(newCardList);

function saveListToLocalstorage() {
  localStorage.setItem("cardList", JSON.stringify(cardList));
}

/* objekte aus der listen nehmen und darstellen */
function renderCard(newCardList, newNote) {
  newCardList.sort((a, b) => new Date(b.changeDate) - new Date(a.changeDate));
  newCardList.forEach((element) => {
    const note = document.createElement("div");
    note.classList.add("card");
    note.id = element.id;
    const noteTitle = document.createElement("p");
    noteTitle.classList.add("title");
    noteTitle.innerText = element.title;
    const noteContent = document.createElement("p");
    noteContent.classList.add("content");
    noteContent.innerText = element.content;
    const noteDate = document.createElement("p");
    noteDate.classList.add("date");
    noteDate.innerText = new Date(element.changeDate).toLocaleString("de-CH", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    note.appendChild(noteTitle);
    note.appendChild(noteContent);
    note.appendChild(noteDate);

    wrapper.appendChild(note);
  });
}

/* eine neue notiz erfassen und in der Liste speichern */
function saveNote() {
  if (newCardList !== null) {
    cardList = newCardList;
  }

  if (inputTitle.value === "" || inputContent.value === "") {
    alert("Bitte beide Felder ausfüllen");
    return;
  }

  const newNote = {
    id: Date.now(),
    title: inputTitle.value,
    content: inputContent.value,
    changeDate: new Date(Date.now()),
  };

  cardList.push(newNote);

  saveListToLocalstorage();

  location.reload();

  return {
    newNote,
  };
}

/* eine bestehende notiz anwählen und im inputfeld weiter bearbeiten */
