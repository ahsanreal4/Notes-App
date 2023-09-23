import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../common/context/userContext";
import { Header, Icon } from "semantic-ui-react";

import InputIconButton from "../../common/components/input";

import "./notesList.css";
import TakeNote from "./components/takeNote";

function NotesList() {
  const { notes } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    if (searchText.length === 0) {
      setFilteredNotes(notes);
      return;
    } else {
      const filteredNotesUpdate = notes.filter((note) =>
        note.text.startsWith(searchText)
      );

      setFilteredNotes(filteredNotesUpdate);
    }
  }, [searchText, notes]);

  return (
    <div className="notes-list-page-container">
      <div className="notes-list-container">
        <Header as="h2">Sticky Notes</Header>
      </div>
      <div className="notes-list-search-input-container">
        <InputIconButton
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <TakeNote />
      {filteredNotes.map((note, key) => (
        <TakeNote key={`note-${key}`} isDummy={false} note={note} />
      ))}
    </div>
  );
}

export default NotesList;
