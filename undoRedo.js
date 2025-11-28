class TextEditor {
  constructor() {
    this.text = "";
    this.undoStack = [];
    this.redoStack = [];
  }
  write(text) {
    this.undoStack.push(this.text);
    this.text = this.text + text;
    this.redo = [];
  }
  undo() {
    if (this.undoStack.length === 0) {
      console.log("Nothing to undo");
      return;
    }
    this.redoStack.push(this.text);
    this.text = this.undoStack.pop();
  }
  redo() {
    if (this.redoStack.length === 0) {
      console.log("Nothing to redo");
      return;
    }
    this.undoStack.push(this.text);
    this.text = this.redoStack.pop();
  }
}
let t = new TextEditor();
t.write("hi nasif");
t.write(" how are you");
t.write(" good morning");
t.undo();
console.log(t);
