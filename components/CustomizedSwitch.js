/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import { withStyles } from '@material-ui/core/styles';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';

import { RiSunFill, RiMoonFill } from 'react-icons/ri';

const IOSSwitch = withStyles((theme) => ({
  root: {
    marginLeft: '20px',
    marginRight: 0,
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
        backgroundColor: '#424242',
        opacity: 1,
        border: '1px solid white',
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
    border: `1px solid ${theme.palette.grey[600]}`,
    backgroundColor: theme.palette.common.white,
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

const CustomizedSwitch = ({ checked, setChecked }) => (
  <FormGroup>
    <FormControlLabel
      control={
        <IOSSwitch checked={checked} onChange={setChecked} value="checked" />
      }
      label=""
    />
  </FormGroup>
);

export default CustomizedSwitch;
