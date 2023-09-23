import { useState } from "react";
import "./App.css";
import { GlobalProvider } from "./common/context/userContext";
import NotesList from "./pages/notesList/notesList";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <>
      <GlobalProvider>
        <div style={{ marginTop: "20px" }}>
          <Container>
            <NotesList />
          </Container>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
