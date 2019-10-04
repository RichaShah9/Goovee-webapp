import React from "react";
import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "center",
    width: "100%"
  },
  image: {
    height: 60
  },
  container: {
    height: 80,
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 25
  },
  listItem: {
    display: "inline-block",
    marginLeft: "1em",
    "&:first-child": {
      position: "relative",
      margin: 0,
      flexBasis: "100%"
    }
  }
}));

function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img
          src="http://goovee.com/wp-content/uploads/2019/09/goovee_wp-1.png"
          alt="logo"
          className={classes.image}
        ></img>
        <ul
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <li className={classes.listItem}>
            <Link href="/" activeClassName="active">
              <a href="/">Accueil</a>
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link href="/tarifs/" activeClassName="active">
              <a href="/tarifs/">Tarifs</a>
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link href="/contact/" activeClassName="active">
              <a href="/contact/">Contact</a>
            </Link>
          </li>
          <li className={classes.listItem}>
            <Search
              style={{
                transform: "rotate(90deg)",
                color: "#32325d",
                display: "flex",
                alignItems: "center"
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
