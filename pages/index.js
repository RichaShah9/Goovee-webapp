import React from "react";
import Layout from "./layouts/main";
import { Grid, Fab, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
  title: {
    fontSize: 30,
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: "2.5rem"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 5
  },
  modules: {
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  insideContainer: {
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container xs={12} className={classes.container}>
        <Grid container item className={classes.insideContainer}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" className={classes.title}>
              Gérez votre entreprise et connectez vous à vos clients comme
              jamais
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            className={classes.container}
            style={{ margin: "50px 0 0 0" }}
          >
            <Link href="/contact/">
              <Fab variant="extended" className={classes.fab}>
                Demandez la création de votre compte Early Adopter
              </Fab>
            </Link>
          </Grid>

          <Grid className={classes.container}>
            <img
              src="http://goovee.com/wp-content/uploads/2019/09/MOCKUP_GOOVEE-1024x683.jpg"
              alt="mock-up"
            />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1" className={classes.title}>
              Goovee : une application unique et innovante pour gérer votre
              business.
            </Typography>
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={8}
            style={{ margin: "50px 0", padding: 25 }}
          >
            <Grid item xs={4}>
              <Grid
                item
                style={{ flexDirection: "row", display: "flex", padding: 25 }}
              >
                <img
                  src="http://goovee.com/wp-content/uploads/2019/09/checkbox.png"
                  alt="CRM"
                  className={classes.image}
                />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                  CRM
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid
                item
                style={{ flexDirection: "row", display: "flex", padding: 25 }}
              >
                <img
                  src="http://goovee.com/wp-content/uploads/2019/09/checkbox.png"
                  alt="Comptabilité"
                  className={classes.image}
                />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                  Comptabilité
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid
                item
                style={{ flexDirection: "row", display: "flex", padding: 25 }}
              >
                <img
                  src="http://goovee.com/wp-content/uploads/2019/09/checkbox.png"
                  alt="Devis"
                  className={classes.image}
                />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                  Devis
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid
                item
                style={{ flexDirection: "row", display: "flex", padding: 25 }}
              >
                <img
                  src="http://goovee.com/wp-content/uploads/2019/09/checkbox.png"
                  alt="Factures"
                  className={classes.image}
                />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                  Factures
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid
                item
                style={{ flexDirection: "row", display: "flex", padding: 25 }}
              >
                <img
                  src="http://goovee.com/wp-content/uploads/2019/09/checkbox.png"
                  alt=" E-commerce"
                  className={classes.image}
                />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                  E-commerce
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid
                item
                style={{ flexDirection: "row", display: "flex", padding: 25 }}
              >
                <img
                  src="http://goovee.com/wp-content/uploads/2019/09/checkbox.png"
                  alt="Achats"
                  className={classes.image}
                />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                  Achats
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            className={classes.container}
            style={{ flexDirection: "column", marginBottom: 50 }}
          >
            <Typography variant="h5">
              <strong>+ une app pour vos clients</strong>
            </Typography>
            <Typography variant="subtitle1">(soon)</Typography>
          </Grid>

          <Grid container item xs={12} style={{ marginBottom: 50 }}>
            <Grid item xs={6} style={{ padding: 50 }}>
              <Typography variant="subtitle1" className={classes.title}>
                Goovee Pro
              </Typography>
              <Typography variant="subtitle1" style={{ padding: 25 }}>
                Goovee, c’est une app pour gérer votre activité que vous soyez
                indépendant, une micro entreprise, une PME ou un commerce de
                proximité.
              </Typography>
              <Typography variant="subtitle1" style={{ padding: "0 25px" }}>
                Goovee pour les pros est disponible sur web et sur mobile.
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ padding: 50 }}>
              <Typography variant="subtitle1" className={classes.title}>
                Goovee
              </Typography>
              <Typography variant="subtitle1" style={{ padding: 25 }}>
                C’est aussi une App pour vos clients : achats et paiements en
                ligne, validation de devis et commandes, support client,
                signature électronique, etc.
              </Typography>
              <Typography variant="subtitle1" style={{ padding: "0 25px" }}>
                Goovee pour vos clients est bientôt disponible.
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ marginBottom: 50 }}>
            <Typography variant="subtitle1" className={classes.title}>
              Gérer son business n’a jamais été aussi simple.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            className={classes.container}
            style={{ marginBottom: 50 }}
          >
            <Link href="/contact/">
              <Fab variant="extended" className={classes.fab}>
                Créez votre compte
              </Fab>
            </Link>
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={6}>
              <img
                src="http://goovee.com/wp-content/uploads/2019/09/Frame@4x-287x300.png"
                alt="frame-boy"
              />
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start"
              }}
            >
              <Typography
                variant="subtitle1"
                style={{ marginBottom: 30, fontSize: 30 }}
              >
                <strong>Application gratuite – pour toujours :</strong>
              </Typography>
              <Typography variant="subtitle1">
                <strong>Pas de période d’essai</strong>
              </Typography>
              <Typography variant="subtitle1">
                <strong>Fonctionnalités complètes</strong>
              </Typography>
              <Typography variant="subtitle1">
                <strong>
                  Liberté : vous pouvez exporter l’ensemble des données à tout
                  moment.
                </strong>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={12}
          style={{
            backgroundColor: "#815cd1",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 50
          }}
        >
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.title}>
              Simple, nomade, puissant !
            </Typography>
          </Grid>
          <Grid
            container
            item
            style={{
              width: "80%"
            }}
          >
            <Grid
              item
              xs={6}
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                padding: 25
              }}
            >
              <Typography variant="subtitle1">
                Gérez votre business où que vous soyez, d’un clic depuis votre
                smartphone, votre tablette ou votre ordinateur.
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Offrez à vos clients un véritable portail : pour acheter vos
                services, voir leurs devis, factures, commandes, etc.. Avec
                Goovee, disposez d’un application multiplateforme.
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Gagnez du temps pour gérer votre trésorerie, le suivi des
                facturations et votre inventaire.
              </Typography>
              <br />
              <Typography variant="subtitle1" style={{ width: "100%" }}>
                Soyez payé plus rapidement !
              </Typography>
              <br />
            </Grid>
            <Grid item xs={6} style={{ padding: 25 }}>
              <img
                src="http://goovee.com/wp-content/uploads/2019/09/Frame@4x--287x300.png"
                alt="frame-girl"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.container} style={{ margin: 70 }}>
          <Link href="/contact/">
            <Fab variant="extended" className={classes.fab}>
              Créez votre compte
            </Fab>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Home;
