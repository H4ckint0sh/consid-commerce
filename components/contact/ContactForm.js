/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import {
  TextField,
  Grid,
  InputLabel,
  Container,
  Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  fieldset: {
    borderRadius: '0px',
  },
}));

const ContactUsForm = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <div className={classes.contactUsBanner}>
          <Grid container item spacing={3} xs={12}>
            <Grid item xs={6}>
              <InputLabel>First Name </InputLabel>
              <TextField
                id="outlined-basic-firstname"
                size="small"
                label="Outlined"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Last Name </InputLabel>
              <TextField
                id="outlined-basic-lastname"
                size="small"
                label="Outlined"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Email </InputLabel>
              <TextField
                id="outlined-basic-email"
                size="small"
                label="Outlined"
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
      </Container>
    </>
  );
};

export default ContactUsForm;
