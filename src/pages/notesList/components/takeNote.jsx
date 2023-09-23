import React, { useState, useContext } from "react";
import { Icon } from "semantic-ui-react";
import NewNoteModal from "../../../common/components/newNoteModal/newNoteModal";
import UserContext from "../../../common/context/userContext";

function TakeNote({ isDummy = true, note = null }) {
  const [openNoteModal, setOpenNoteModal] = useState(false);
  const { notes, setNotes } = useContext(UserContext);
  const [text, setText] = useState("");
  const [mode, setMode] = useState("new");

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id != id);
    setNotes(filteredNotes);
  };

  return (
    <>
      <NewNoteModal
        open={openNoteModal}
        setOpen={setOpenNoteModal}
        text={text}
        setText={setText}
        mode={mode}
        noteId={note?.id}
      />

      <div
        className="take-note-container"
        onClick={() => {
          if (isDummy) {
            setOpenNoteModal(true);
          }
        }}
      >
        <div>
          {!isDummy ? (
            <div>
              <Icon
                name="eye"
                onClick={() => {
                  setMode("view");
                  setText(note?.text);
                  setOpenNoteModal(true);
                }}
              />
              <Icon
                name="edit"
                onClick={() => {
                  setMode("edit");
                  setText(note?.text);
                  setOpenNoteModal(true);
                }}
              />
              <Icon name="trash" onClick={() => deleteNote(note.id)} />
            </div>
          ) : null}
        </div>
        <div>
          <p className="take-note-text">
            {isDummy ? "Take a note..." : note.text}
          </p>
        </div>
      </div>
    </>
  );
}

export default TakeNote;
