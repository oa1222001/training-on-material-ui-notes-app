import { Button, Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoteCard from "../components/NoteCard";

export default function Notes({ deleteNote, notes }) {
  useEffect(() => {
    console.log(notes);
  }, []);
  const navigate = useNavigate();

  const createNoteHandler = () => {
    navigate("/create", { replace: true });
  };
  return (
    <Container>
      {/* <Grid container>
        <Grid item md={3} xs={12} justifyContent="center" >
          <Paper >1</Paper >
        </Grid>
        <Grid item md={3} xs={12} justifyContent="center" >
          <Paper >2</Paper >
        </Grid>
        <Grid item md={3} xs={12} justifyContent="center" >
          <Paper >3</Paper >
        </Grid>
        <Grid item md={3} xs={12} justifyContent="center" >
          <Paper >4</Paper >
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        {notes.map((n) => (
          <Grid item key={n.id} xs={12} sm={4} md={6} lg={3}>
            <NoteCard note={n} deleteNote={deleteNote} />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        style={{ marginTop: "20px" }}
        onClick={createNoteHandler}
      >
        Create new note
      </Button>
    </Container>
  );
}
