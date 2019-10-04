import React from "react";
import Layout from "./layouts/main";
import { Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    width: "95%",
    background:'#f5f5f5',
  },
  button: {
    backgroundColor: "#815cd1",
    borderColor: "#815cd1",
    color: "white",
    fontSize: 20,
    fontWeight: 500,
    textTransform: "none",
    border: "1px solid",
    borderRadius: 25,
    margin: '25px 0 100px 0',
    padding: '0 50px',
    "&:hover": {
      backgroundColor: "white",
      borderColor: "#815cd1",
      color: "#815cd1"
    }
  },
}));
function Contact() {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container xs={12} className={classes.container} >
        <Grid container item style={{width: 'fit-content'}}>
          <Grid item xs={6}>
            <TextField
              id="outlined-bare"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              placeholder="Nom et prénom"
              inputProps={{ "aria-label": "bare" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-bare"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              placeholder="Société"
              inputProps={{ "aria-label": "bare" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-bare"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              placeholder="Adresse email"
              inputProps={{ "aria-label": "bare" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-bare"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              placeholder="Téléphone"
              inputProps={{ "aria-label": "bare" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-bare-multiline"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              placeholder="Message"
              multiline
              inputProps={{ "aria-label": "bare" }}
              rows="10"
              style={{width: '97.5%'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.button}>Envoyer</Button>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
export default Contact;
