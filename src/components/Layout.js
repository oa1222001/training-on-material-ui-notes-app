import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#2b9",
      paddingTop: "30px",
      paddingBottom: "30px",
      width: "100%",
    },
    drawer: {
      width: `${drawerWidth}px`,
    },
    drawerPaper: {
      width: `${drawerWidth}px`,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(4),
    },
  };
});

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlined color="secondary" />,
    path: "/create",
  },
];

const Layout = ({ children }) => {
  const classes = useStyles();
  const navigator = useNavigate();
  const location = useLocation();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
          <Typography>
            Welcome to notes App on {new Date().toDateString()}
          </Typography>
          <Avatar src="/goku.png" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <Typography variant="h5">Notes App</Typography>
        </div>
        {/* <List>
          <ListItem>
            <ListItemText primary="hello" />
            <ListItemText primary="bye" />
          </ListItem>
        </List> */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={Math.random() * menuItems.length}
              button
              className={location.pathname === item.path ? classes.active : ""}
              onClick={() => {
                navigator(`${item.path}`);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
