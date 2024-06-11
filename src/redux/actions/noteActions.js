//Action constants
export const ADD_NOTE = "Add Note";
export const DELETE_NOTE = "Delete Note";

//Action Creators
export const addNote = (note)=>({text:note, type:ADD_NOTE});
export const deleteNote = (index)=>({index:index, type:DELETE_NOTE});