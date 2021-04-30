/* eslint-disable react/no-array-index-key */
import { useState } from 'react';

import {
  Button,
  Chip,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import Categories from './Categories';
import Prices from './Prices';

const useStyles = makeStyles({
  root: {
    margin: 0,
  },
  chipColorBlack: {
    backgroundColor: 'black',
    width: '150%',
    borderRadius: 8,
  },
  chipColorRed: {
    backgroundColor: 'red',
    width: '150%',
    borderRadius: 8,
  },
  chipColorYellow: {
    backgroundColor: 'yellow',
    width: '150%',
    borderRadius: 8,
  },
  chipColorGreen: {
    backgroundColor: 'green',
    width: '150%',
    borderRadius: 8,
  },
  chipColorPurple: {
    backgroundColor: 'purple',
    width: '150%',
    borderRadius: 8,
  },
  chipColorBlue: {
    backgroundColor: 'blue',
    width: '150%',
    borderRadius: 8,
  },
  chipColorOrange: {
    backgroundColor: 'orange',
    width: '150%',
    borderRadius: 8,
  },
  button: {
    marginTop: '20px',
  },
});

const Filter = () => {
  const classes = useStyles();
  const [openPrice, setOpenPrice] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const [openColor, setOpenColor] = useState(false);

  return (
    <Grid sx={10} item>
      <List>
        <ListItem divider dense>
          <List dense>
            <Categories />
          </List>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setOpenPrice(!openPrice);
          }}
          divider
        >
          <ListItemText primary="Price" />
          {openPrice ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPrice} timeout="auto">
          <List component="div" disablePadding>
            <ListItem>
              <Prices />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() => {
            setOpenSize(!openSize);
          }}
          divider
        >
          <ListItemText primary="Size" />
          {openSize ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSize} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText primary="Size Section" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() => {
            setOpenColor(!openColor);
          }}
          divider
        >
          <ListItemText primary="Color" />
          {openColor ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openColor} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ColorGrid />
          </List>
        </Collapse>
        <Button
          className={classes.button}
          color="primary"
          variant="outlined"
          fullWidth
        >
          Apply Filters
        </Button>

        <Button
          color="primary"
          variant="contained"
          className={classes.button}
          fullWidth
        >
          Reset Filters
        </Button>
      </List>
    </Grid>
  );
};

const ColorGrid = () => {
  const classes = useStyles();

  const {
    chipColorBlack,
    chipColorRed,
    chipColorYellow,
    chipColorGreen,
    chipColorPurple,
    chipColorBlue,
    chipColorOrange,
    // 'orange'
  } = classes;

  const colors = [
    chipColorBlack,
    chipColorRed,
    chipColorYellow,
    chipColorGreen,
    chipColorPurple,
    chipColorBlue,
    chipColorOrange,
  ];

  return (
    <Grid
      spacing={3}
      md={12}
      direction="row"
      container
      className={classes.root}
    >
      {colors.map((color, index) => (
        <Grid key={index} item>
          <Chip component="div" className={color} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Filter;
