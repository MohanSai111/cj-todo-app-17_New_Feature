import { useState } from "react";
import "./NoteForm.css";
//import { addNote } from "../../redux/actions/noteActions";
import { actions } from "../../redux/reducers/noteReducer";
import { useDispatch } from "react-redux";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const disptach= useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    disptach(actions.add(noteText))
    setNoteText("");
  };

  return (
    <div className="container">
      
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
