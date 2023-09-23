import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, Form, TextArea, Message } from "semantic-ui-react";

import "./newNoteModal.css";
import UserContext from "../../context/userContext";

function NewNoteModal({
  open,
  setOpen,
  text,
  setText,
  mode = "new",
  noteId = "",
}) {
  const [showError, setShowError] = useState(false);
  const { notes, setNotes } = useContext(UserContext);

  useEffect(() => {
    if (text.length > 0) {
      setShowError(false);
    }
  }, [text]);

  const handleEdit = () => {
    if (noteId.length === 0) return;

    const notesClone = [...notes];

    for (let i = 0; i < notesClone.length; i++) {
      const note = notesClone[i];
      if (note.id == noteId) {
        note.text = text;
        break;
      }
    }

    setNotes(notesClone);
    setOpen(false);
    setText("");
  };

  const handleSave = () => {
    if (text == "") {
      setShowError(true);
      return;
    }

    if (mode == "edit") {
      handleEdit();
      return;
    }

    const noteObject = {
      time: new Date(),
      text,
      id: Date.now(),
    };

    setNotes((prev) => [...prev, noteObject]);
    setOpen(false);
    setText("");
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      className="new-note-modal-container"
    >
      <Modal.Header>Add a Note</Modal.Header>
      <Modal.Content>
        <Form>
          <TextArea
            placeholder="Start typing here..."
            style={{ minHeight: 100, resize: "none" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={mode === "view"}
          />
          {showError ? (
            <Message negative>
              <Message.Header>Save failed</Message.Header>
              <p>Text input is empty</p>
            </Message>
          ) : null}
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          {mode == "view" ? "Close" : "Cancel"}
        </Button>
        {mode != "view" && (
          <Button
            content="Save"
            labelPosition="right"
            icon="checkmark"
            onClick={() => handleSave()}
            positive
            type="submit"
          />
        )}
      </Modal.Actions>
    </Modal>
  );
}

export default NewNoteModal;
