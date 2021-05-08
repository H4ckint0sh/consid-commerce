/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { TextField, Grid, InputLabel, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fieldset: {
    borderRadius: '0px',
  },
  inputLabel: {
    margin: theme.spacing(1, 0),
    fontWeight: 'bold',
  },
}));

const ContactUsForm = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.contactUsBanner}>
        <Grid container item spacing={3} xs={12}>
          <Grid item xs={6}>
            <InputLabel className={classes.inputLabel}>First Name </InputLabel>
            <TextField
              id="outlined-basic-firstname"
              size="small"
              label="First Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel className={classes.inputLabel}>Last Name </InputLabel>
            <TextField
              id="outlined-basic-lastname"
              size="small"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel className={classes.inputLabel}>Email </InputLabel>
            <TextField
              id="outlined-basic-email"
              size="small"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={12} item>
            <Button
              color="primary"
              disableElevation
              variant="contained"
              fullWidth
            >
              {' '}
              Submit{' '}
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ContactUsForm;
