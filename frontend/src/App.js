import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import * as sessionActions from "./store/session";
// import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Accessibility from "./components/Accessibility";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Services from "./components/Services";
import Vitamins from "./components/Vitamins";
import WeightLoss from "./components/WeightLoss";
import Telehealth from "./components/Telehealth";
import Pricing from "./components/Pricing";
import Locations from "./components/Locations";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/locations">
          <Locations />
        </Route>
        <Route exact path="/contact-us">
          <Contact />
        </Route>
        <Route exact path="/accessibility">
          <Accessibility />
        </Route>
        <Route exact path="/terms-and-conditions">
          <Terms />
        </Route>
        <Route exact path="/services/telehealth">
          <Telehealth />
        </Route>
        <Route exact path="/services/vitamin-injections">
          <Vitamins />
        </Route>
        <Route exact path="/services/medical-weight-loss">
          <WeightLoss />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
