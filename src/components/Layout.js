import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  page: {
    backgroundColor: "#2b9",
    paddingTop: "30px",
    paddingBottom: "30px",
    width: "100%",
  },
});
const Layout = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.page}>{children}</div>;
};

export default Layout;
