import "./NoteList.css";
import { useSelector } from "react-redux";
import { DeleteNote } from "../../redux/actions/noteActions";
import { useDispatch } from "react-redux";

function NoteList() {
    const notes=useSelector((state)=>state.noteReducer.notes);
    const dispatch= useDispatch();
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={()=>(dispatch(DeleteNote(index)))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
