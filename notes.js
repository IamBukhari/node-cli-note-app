const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  const notes = loadNotes();

  console.log(notes);
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const isExist = notes.find((note) => note.title === title);

  if (!isExist) {
    notes.push({ title: title, body: body });
    saveNote(notes);

    console.log(chalk.bold.inverse.green("note added"));
  } else {
    console.log(chalk.inverse.red("note title exist try with other title"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const isExist = notes.filter((note) => note.title !== title);
  const toBeDeleted = notes.filter((note) => note.title === title);

  if (toBeDeleted.length === 0) {
    console.log("no note found having this title");
  } else {
    console.log("removing", title);
    saveNote(isExist);
    console.log("removed");
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.bgYellow("title: "), chalk.inverse(note.title));
    console.log(chalk.bgYellow("body: "), note.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const saveNote = (notes) => {
  dataToSave = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataToSave);
};

const loadNotes = () => {
  try {
    const dataBudder = fs.readFileSync("notes.json");
    const data = dataBudder.toString();
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
};
