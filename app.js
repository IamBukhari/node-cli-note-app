const yargs = require("yargs");

const notes = require("./notes");

yargs.command({
  command: "add",
  describe: "add a note",
  builder: {
    title: { describe: "Note Title", demandOption: true, type: "string" },
    body: { describe: "Note body", demandOption: true, type: "string" },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list all notes",
  handler() {
    notes.getNotes();
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
