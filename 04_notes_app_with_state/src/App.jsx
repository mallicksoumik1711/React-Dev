import "./App.css";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState("");
  const [notesDescription, setNotesDescription] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notes || !notesDescription) {
      alert("Please enter Notes and description first");
      return;
    }
    const allNotesCopy = [...allNotes];
    allNotesCopy.push({ notes, notesDescription });
    setAllNotes(allNotesCopy);
    console.log(allNotesCopy);
  };

  const deleteNote = (idx) => {
    // console.log(idx)
    setAllNotes((prevNotes) =>
      prevNotes.filter((note, index) => index !== idx),
    );
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
              Add Note
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
                  onClick={() => deleteNote(idx)}
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
