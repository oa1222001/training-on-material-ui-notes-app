import { Button, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import NoteCard from "../components/NoteCard";
const useStyles = makeStyles({
  myMasonryGrid: {
    display: "flex",
    marginLeft: "-30px",
    width: "auto",
  },
  myMasonryGridColumn: {
    paddingLeft: "30px",
    backgroundClip: "padding-box",
  },
  myMasonryGridColumnDiv: {
    background: "#13abc9",
    marginBottom: "30px",
  },
});
export default function Notes({ deleteNote, notes }) {
  useEffect(() => {
    console.log(notes);
  }, []);
  const navigate = useNavigate();
  const classes = useStyles(notes);
  const createNoteHandler = () => {
    navigate("/create", { replace: true });
  };
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
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
      <Masonry
        breakpointCols={breakpoints}
        className={classes.myMasonryGrid}
        columnClassName={classes.myMasonryGridColumn}
      >
        {notes.map((n) => (
          <div key={n.id} className={classes.myMasonryGridColumnDiv}>
            <NoteCard note={n} deleteNote={deleteNote} />
          </div>
        ))}
      </Masonry>
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
