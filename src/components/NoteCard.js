import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import React, { useState } from "react";
const x = 0;
const NoteCard = ({ deleteNote, note }) => {
  return (
    <div>
      <Card elevation={9}>
        <CardHeader
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
