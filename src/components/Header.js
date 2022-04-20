import React from "react";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
const style = {
  background: "#F50057",
  margin: "0 0 40px 0"
};

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar data-cy='navbar' position="static" style={style}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Recipe Search App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
