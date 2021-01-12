import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Products from "./products";
import ProductOne from "./productone"
import ProductTwo from "./producttwo"

const NavBarTop = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Products /></Route>
        <Route path="/productone"><ProductOne /></Route>
        <Route path="/producttwo"><ProductTwo /></Route>
      </Switch>
    </Router>
  );
}

export default NavBarTop;