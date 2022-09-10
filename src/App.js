import { useState } from "react";
import styled from "styled-components";

import { CreateNote } from "CreateNote";
import { Note } from "Note";
import { useStateStorage } from "useStateStorage";

const generate = () => `modal__${Date.now() + Math.random()}`;

const colors = ["#ffec97", "#f9cfe3", "#fcddd1", "#e3d5ea", "#e5eb9f", "#bae3eb"];

const StyledNotesList = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
`;

export const App = () => {
  const [notes, setNotes] = useStateStorage("notes", []);

  const createNote = () => {
    const id = generate();

    const newNote = {
      id,
      color: colors[parseInt(Math.random() * colors.length)],
      key: id,
      title: "",
      note: "",
    };
    setNotes((notes) => [...notes, newNote]);
  };

  const handleUpdateNote = (id) => (field) => (event) => {
    setNotes((notes) => notes.map((note) => (note.id === id ? { ...note, [field]: event.target.value.trim() } : note)));
  };

  const deleteNote = (id) => () => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  return (
    <StyledNotesList>
      <CreateNote createNote={createNote} />
      {[...notes].reverse().map((note) => {
        return <Note {...note} onUpdateNote={handleUpdateNote(note.id)} deleteNote={deleteNote(note.id)} />;
      })}
    </StyledNotesList>
  );
};
