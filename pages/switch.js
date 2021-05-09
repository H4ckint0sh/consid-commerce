/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  FormGroup,
  FormControlLabel,
  Switch,
  Grid,
  Typography,
} from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';

import { RiSunFill, RiMoonFill } from 'react-icons/ri';

const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const IOSSwitch = withStyles((theme) => ({
  root: {
    margin: '20px',
    width: 42,
    height: 26,
    padding: 0,
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: 'black',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => (
  <Switch
    focusVisibleClassName={classes.focusVisible}
    disableRipple
    checkedIcon={<RiMoonFill />}
    icon={<RiSunFill color="#FFD900" />}
    classes={{
      root: classes.root,
      switchBase: classes.switchBase,
      thumb: classes.thumb,
      track: classes.track,
      checked: classes.checked,
    }}
    {...props}
  />
));

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div style={{ margin: '300px auto' }}>
      <FormGroup>
        <FormControlLabel
          control={
            <PurpleSwitch
              checked={state.checkedA}
              onChange={handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Custom color"
        />
        <FormControlLabel
          control={
            <IOSSwitch
              checked={state.checkedB}
              onChange={handleChange('checkedB')}
              value="checkedB"
            />
          }
          label="iOS style"
        />
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Off</Grid>
            <Grid item>
              <AntSwitch
                checked={state.checkedC}
                onChange={handleChange('checkedC')}
                value="checkedC"
              />
            </Grid>
            <Grid item>On</Grid>
          </Grid>
        </Typography>
      </FormGroup>
    </div>
  );
}
