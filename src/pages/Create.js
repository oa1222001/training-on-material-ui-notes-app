import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import SendIcon from "@material-ui/icons/Send";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { RadioGroup } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  // btn: {
  //   fontSize: 60,
  //   backgroundColor: "violet",
  //   "&:hover": {
  //     backgroundColor: "#00f",
  //   },
  // },
  // title: {
  //   textDecoration: "underline",
  //   margin: 20,
  // },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create({ addNote }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("todos");
  const navigate = useNavigate();
  const classes = useStyles();
  const submitHandle = (e) => {
    e.preventDefault();
    if (title && details) {
      console.log(title, details, category);
      addNote({
        title,
        details,
        Category: category,
        id: Math.random().toString(),
      });
      navigate("/", { replace: true });
    }
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const detailsHandler = (e) => {
    setDetails(e.target.value);
  };
  return (
    <Container>
      <Typography
        className={
          ""
          // classes.title
        }
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={submitHandle}>
        <TextField
          onChange={titleHandler}
          variant="outlined"
          label="Note Title"
          color="secondary"
          fullWidth
          required
          className={classes.field}
          error={!title}
        />
        <TextField
          onChange={detailsHandler}
          variant="outlined"
          label="Details"
          color="secondary"
          fullWidth
          required
          multiline
          minRows={4}
          className={classes.field}
          error={!details}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              control={<Radio />}
              label="moneyyy"
              value={"money"}
            />
            <FormControlLabel
              control={<Radio />}
              label="todooooos"
              value={"todos"}
            />
            <FormControlLabel
              control={<Radio />}
              label="remindeeeeer"
              value={"reminders"}
            />
            <FormControlLabel
              control={<Radio />}
              label="wooooooek"
              value={"work"}
            />
          </RadioGroup>
        </FormControl>
        <Button
          className={
            ""
            // classes.btn
          }
          type="submit"
          color="primary"
          variant="contained"
          startIcon={<AcUnitOutlinedIcon />}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
      <br />
      <AcUnitOutlinedIcon color="primary" fontSize="large" />
      <AcUnitOutlinedIcon color="primary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" />
      <AcUnitOutlinedIcon color="error" fontSize="small" />
      <AcUnitOutlinedIcon color="disabled" fontSize="small" />
    </Container>
  );
}
