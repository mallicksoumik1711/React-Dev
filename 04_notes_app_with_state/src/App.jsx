import "./App.css";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState("");
  const [notesDescription, setNotesDescription] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notes || !notesDescription) {
      alert("Please enter Notes and description first");
      return;
    }
    const allNotesCopy = [...allNotes];
    if (editIndex !== null) {
      // method1
      // setAllNotes((prevNote) => {
      //   return prevNote.map((note, index) => {
      //     return index === editIndex ? { notes, notesDescription } : note;
      //   });
      // });

      // method2
      allNotesCopy[editIndex] = {
        notes,
        notesDescription,
      };
      setAllNotes(allNotesCopy);
      setEditIndex(null);
    } else {
      // method1
      // setAllNotes((prevNote) => [...prevNote, {notes, notesDescription}])

      // method2
      allNotesCopy.push({ notes, notesDescription });
      setAllNotes(allNotesCopy);
    }
    setNotes("");
    setNotesDescription("");
  };

  const deleteNote = (idx) => {
    // console.log(idx)
    setAllNotes((prevNotes) =>
      prevNotes.filter((note, index) => index !== idx),
    );
  };

  const editNote = (idx) => {
    // console.log("hello")
    setNotes(allNotes[idx].notes);
    setNotesDescription(allNotes[idx].notesDescription);
    setEditIndex(idx);
  };

  return (
    <>
      <div className="m-5 flex">
        <div className="input-container w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-wrap w-full px-10 gap-5"
          >
            <h1 className="text-5xl p-5 font-bold">Add Notes here</h1>
            <input
              className="p-5 rounded-md outline-none bg-zinc-900"
              type="text"
              placeholder="Enter Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <textarea
              className="resize-none p-5 h-40 rounded-md outline-none bg-zinc-900"
              placeholder="Enter Notes Description"
              value={notesDescription}
              onChange={(e) => setNotesDescription(e.target.value)}
            ></textarea>
            <button
              className="p-5 rounded-md font-bold active:scale-95 bg-zinc-900"
              type="submit"
            >
              {editIndex !== null ? "Update Notes" : "Add Notes"}
            </button>
          </form>
        </div>
        <div className="notes-container w-1/2">
          <h1 className="text-5xl p-5 font-bold">Added Notes</h1>
          <div className="notes p-5 flex flex-wrap gap-5">
            {allNotes.map((value, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between items-start bg-zinc-900 px-10 py-4 rounded-md h-50"
              >
                <div>
                  Title: {value.notes}
                  <br />
                  Description: {value.notesDescription}
                </div>
                <button
                  onClick={() => deleteNote(idx)}
                  className="bg-red-400 text-red-700 px-4 rounded-md"
                >
                  Delete
                </button>
                <button
                  onClick={() => editNote(idx)}
                  className="bg-blue-400 text-blue-700 px-4 rounded-md"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
