webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Nav/index.js":
/*!***************************************!*\
  !*** ./pages/components/Nav/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Link */ "./pages/components/Link/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
var _jsxFileName = "/home/axelor/FrontEndProject/Websites/goovee-webapp/pages/components/Nav/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({
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
  },
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
    '&:after': {
      color: "#32325d"
    }
  }
})); // #32325d

function Nav() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("img", {
    src: "http://goovee.com/wp-content/uploads/2019/09/goovee_wp-1.png",
    alt: "logo",
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("ul", {
    style: {
      display: "flex",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("li", {
    className: classes.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/",
    activeClassName: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Accueil"))), __jsx("li", {
    className: classes.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/tarifs/",
    activeClassName: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("a", {
    href: "/tarifs/",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Tarifs"))), __jsx("li", {
    className: classes.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/contact/",
    activeClassName: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("a", {
    href: "/contact/",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Contact"))), __jsx("li", {
    className: classes.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Search"], {
    style: {
      transform: "rotate(90deg)",
      color: "#32325d",
      display: "flex",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.66c197a1b399515aff7d.hot-update.js.map