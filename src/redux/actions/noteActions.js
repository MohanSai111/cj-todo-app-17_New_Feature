
export const ADD_NOTE="ADD Note";
export const DELETE_NOTE="Delete Note";

//ACTION CREATORS
export const addNote = (text)=>({text, type:ADD_NOTE});
export const DeleteNote = (index)=>({index, type: DELETE_NOTE});