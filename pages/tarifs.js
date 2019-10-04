import React from "react";
import Layout from "./layouts/main";
import { Grid, Fab, Typography, Card, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Done } from "@material-ui/icons";
import Link from "next/link";

const useStyles = makeStyles(() => ({
  fab: {
    backgroundColor: "#815cd1",
    borderColor: "#815cd1",
    color: "white",
    fontSize: 20,
    fontWeight: 500,
    textTransform: "none",
    border: "1px solid",
    padding: "0 50px",
    "&:hover": {
      backgroundColor: "white",
      borderColor: "#815cd1",
      color: "#815cd1"
    }
  },
  card: {
    maxWidth: 800
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

function Tarifs() {
  const classes = useStyles();

  return (
    <Layout>
      <Grid
        container
        xs={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Grid container item style={{ width: "70%" }}>
          <Grid
            container
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "space-evenly"
            }}
          >
            <Card style={{ width: 500, borderRadius: 30 }}>
              <CardHeader
                title="Pack Standard"
                style={{
                  backgroundColor: "#815cd1",
                  color: "white",
                  textAlign: "center"
                }}
              />
              <Typography
                style={{
                  color: "#815cd1",
                  fontSize: 50,
                  fontWeight: 300,
                  lineHeight: "1.03em",
                  padding: 20,
                  textAlign: "center",
                  borderBottom: "1px solid lightgray"
                }}
              >
                Gratuit
              </Typography>
              <Grid item style={{ padding: "25px 50px" }}>
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: 15,
                    color: "#32325d",
                    fontWeight: 600,
                    alignItems: "center",
                    display: "flex"
                  }}
                >
                  <Done style={{ color: "green", marginRight: 15 }} />
                  <div>Pas de période d’essai</div>
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: 15,
                    color: "#32325d",
                    fontWeight: 600,
                    alignItems: "center",
                    display: "flex"
                  }}
                >
                  <Done style={{ color: "green", marginRight: 15 }} />

                  <div> Pas de commission</div>
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: 15,
                    color: "#32325d",
                    fontWeight: 600,
                    alignItems: "center",
                    display: "flex"
                  }}
                >
                  <Done style={{ color: "green", marginRight: 15 }} />

                  <div> 1 App pro + 1 App client</div>
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: 15,
                    color: "#32325d",
                    fontWeight: 600,
                    alignItems: "center",
                    display: "flex"
                  }}
                >
                  <Done style={{ color: "green", marginRight: 15 }} />
                  <div>Toutes les fonctionnalités</div>
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: 15,
                    color: "#32325d",
                    fontWeight: 600,
                    alignItems: "center",
                    display: "flex"
                  }}
                >
                  <Done style={{ color: "green", marginRight: 15 }} />

                  <div>Support client sur le forum</div>
                </Typography>
              </Grid>
            </Card>

            <Card style={{ width: 500, borderRadius: 30 }}>
              <CardHeader
                title="Pack Plus"
                style={{
                  backgroundColor: "#815cd1",
                  color: "white",
                  textAlign: "center"
                }}
              />
              <Typography
                style={{
                  color: "#815cd1",
                  fontSize: 50,
                  fontWeight: 300,
                  lineHeight: "1.03em",
                  padding: 20,
                  borderBottom: "1px solid lightgray",
                  textAlign: "center"
                }}
              >
                <sup style={{ fontSize: 18 }}>€ </sup>
                29
                <sub style={{ fontSize: 18 }}>/mois</sub>
              </Typography>
              <Grid item style={{ padding: "25px 50px" }}>
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: 15,
                    color: "#32325d",
                    fontWeight: 600,
                    alignItems: "center",
                    display: "flex"
                  }}
                >
                  <Done style={{ color: "green", marginRight: 15 }} />

                  <div> Comprend tout en Standard +</div>
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: 15,
                    color: "#32325d",
                    fontWeight: 600,
                    alignItems: "center",
                    display: "flex"
                  }}
                >
                  <Done style={{ color: "green", marginRight: 15 }} />

                  <div>Espace disque de 10 Go</div>
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: 15,
                    color: "#32325d",
                    fontWeight: 600,
                    alignItems: "center",
                    display: "flex"
                  }}
                >
                  <Done style={{ color: "green", marginRight: 15 }} />

                  <div>Support client par email</div>
                </Typography>
              </Grid>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.container}
            style={{ margin: 70 }}
          >
            <Link href="/contact/">
              <Fab variant="extended" className={classes.fab}>
                Créez votre compte
              </Fab>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
export default Tarifs;
