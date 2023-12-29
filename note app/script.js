const body = document.querySelector("body");
const add = document.getElementById("add");
const savedNotes = JSON.parse(localStorage.getItem("savedNotes")); // to render saved savedNotes from local storage.

add.addEventListener("click", () => {
  addNoteCard();
  updateLocalStorage();
});

// press Shift + n to add new note
document.addEventListener("keydown", (e) => {
  if (e.key == "N") {
    addNoteCard();
    updateLocalStorage();
  }
});

// press Shift + x to delete active note
document.addEventListener("keydown", (e) => {
  if (e.key == "X") {
    document.querySelector(".active").remove();
    updateLocalStorage();
  }
});

addNoteCard = (text = "") => {
  deactiveOthers();
  const note = document.createElement("div");
  note.classList.add("container");
  note.classList.add("active");
  note.innerHTML = `
    <div class="head">
    <button class="edit">&#x270F;</button>
    <button class="delete">&#x1F5D1;</button>
    </div>
      <textarea class="text active" name="note" id="note" >${text}</textarea>
    `;

  const del = note.querySelector(".delete");
  const edit = note.querySelector(".edit");
  const tarea = note.querySelector("textarea");

  del.addEventListener("click", () => {
    note.remove();
    updateLocalStorage();
  });

  edit.addEventListener("click", () => {
    deactiveOthers(note);
    tarea.value = correctNote(tarea.value);
  });

  tarea.addEventListener("input", () => {
    updateLocalStorage();
  });

  body.append(note);
};

deactiveOthers = (con) => {
  const containers = document.querySelectorAll(".container");
  containers.forEach((note) => {
    if (con != note) {
      note.classList.remove("active");
      note.querySelector("textarea").classList.remove("active");
      note.querySelector("textarea").disabled = true;
    } else {
      note.classList.toggle("active");
      note.querySelector("textarea").classList.toggle("active");
      if (note.classList.contains("active")) {
        note.querySelector("textarea").disabled = false;
      } else {
        note.querySelector("textarea").disabled = true;
      }
    }
  });
};

for (let note in savedNotes) {
  addNoteCard(savedNotes[note]);
  deactiveOthers();
}

updateLocalStorage = () => {
  const textareas = document.querySelectorAll("textarea");
  let savedNotes = [];
  textareas.forEach((text) => savedNotes.push(text.value));
  localStorage.setItem("savedNotes", JSON.stringify(savedNotes));
};

//  -------- not finished -------
correctNote = (text) => {
  let c = text.replace(/#/g, "o");
  let d = c.replace(/-/g, "*");
  return d;
};
