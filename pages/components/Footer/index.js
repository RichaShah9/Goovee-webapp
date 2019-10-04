import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Link from "next/link";

function Footer() {
  return (
    <Grid
      container
      xs={12}
      style={{
        padding: 50,
        background: "#222",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Grid
        container
        item
        style={{
          width: "80%",
          justifyContent: "flex-end",
          flexDirection: "column"
        }}
      >
        <Grid container item xs={12}>
          <Grid item xs={10} />
          <Grid item xs={2}>
            <Typography
              variant="subtitle1"
              style={{ marginBottom: 50, color: "#815cd1", fontSize: 18 }}
            >
              Société
            </Typography>
            <Typography variant="subtitle1">
              <Link href="/tarifs/">
                <a  href="/tarifs/" style={{ textDecoration: "none", color: "white" }}>
                  A propos
                </a>
              </Link>
            </Typography>
            <Typography variant="subtitle1">
              <Link href="/tarifs/">
                <a  href="/tarifs/" style={{ textDecoration: "none", color: "white" }}>
                  {" "}
                  Conditions d’utilisation
                </a>
              </Link>
            </Typography>
            <Typography variant="subtitle1">
              <Link href="/tarifs/">
                <a href="/tarifs/" style={{ textDecoration: "none", color: "white" }}>
                  Politique de confidentialité
                </a>
              </Link>
            </Typography>
            <Typography variant="subtitle1">
              <Link href="/tarifs/">
                <a  href="/tarifs/" style={{ textDecoration: "none", color: "white" }}>
                  Sécurisation des données
                </a>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Footer;
