import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat, sans-serif, Open Sans",
    backgroundColor: "white",
    color: "#32325d"
  },
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1,
    backgroundColor: "white"
  }
}));

export default function Main({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Head>
        <title>GooVee | Simplifiez la gestion de votre commerce</title>
      </Head>
      <header className={classes.header}>
        <Nav />
      </header>
      <main>
        <div style={{ height: 80 }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "100px 0 0 0"
          }}
        >
          {children}
        </div>
      </main>
      <Footer>Footer</Footer>
    </div>
  );
}
