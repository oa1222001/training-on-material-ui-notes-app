import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { useState } from "react";
import Layout from "./components/Layout";
const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
});
const initNotes = [
  {
    title: "title 1",
    details: "details 1 details 1 details 1 details 1 details 1 ",
    id: " 1 ",
    Category: "reminders",
  },
  {
    title: "title 2",
    details: "details 2 details 2 details 2 details 2 details 2 ",
    id: " 2 ",
    Category: "work",
  },
  {
    title: "title 3",
    details: "details 3 details 3 details 3 details 3 details 3 ",
    id: " 3 ",
    Category: "todos",
  },
];
function App() {
  const [notes, setNotes] = useState(initNotes);
  const addNoteHandler = (note) => {
    setNotes((prev) => {
      return [...prev, note];
    });
  };
  const deleteNoteHandler = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={<Notes notes={notes} deleteNote={deleteNoteHandler} />}
          ></Route>
          <Route
            path="/create"
            element={<Create addNote={addNoteHandler} />}
          ></Route>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
