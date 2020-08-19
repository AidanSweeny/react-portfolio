import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NoMatch from "./pages/NoMatch";

function App() {

  return (
    <Router>
      <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}


export default App;
