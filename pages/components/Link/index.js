import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { Children } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "gray",
    fontWeight: 600,
    transition: "all 0.2s",
    "&:hover": {
      color: "rgba(0, 0, 0, 0.6)",
      textDecoration: "none",
      borderBottom: "2px solid #30b6ab"
    }
  },
  active: {
    color: "#32325d",
    borderBottom: "2px solid #30b6ab"
  }
}));

function ActiveLink({ router, children, as, href, ...rest }) {
  const classes = useStyles();
  return (
    <Link {...rest} href={href} as={as}>
      {React.cloneElement(Children.only(children), {
        className:
          router.asPath === href || router.asPath === as
            ? `${classNames(classes.active, classes.link)}`
            : classes.link
      })}
    </Link>
  );
}

export default withRouter(ActiveLink);
