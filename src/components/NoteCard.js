import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
// const x = 0;
const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.Category === "work") {
        return yellow[700];
      }
      if (note.Category === "money") {
        return green[700];
      }
      if (note.Category === "todos") {
        return pink[700];
      }
      return blue;
    },
  },
});
const NoteCard = ({ deleteNote, note }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={9}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.Category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton
              onClick={() => {
                deleteNote(note.id);
              }}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.Category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
