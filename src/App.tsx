import React, { useState } from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Backdrop from "./components/Backdrop";

import Home from "./pages/home";
import JobsByMajor from "./pages/jobs_by_major";

const client = new ApolloClient({
  uri: process.env.REACT_APP_JOBS_API_URL
});

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <ApolloProvider client={client}>
      <NavBar onClick={() => setDrawerOpen(true)} />
      <Sidebar visible={drawerOpen} onLinkClick={() => setDrawerOpen(false)} />
      <Backdrop visible={drawerOpen} onClick={() => setDrawerOpen(false)} />
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/curso" component={JobsByMajor} />
          <Route
            path="/"
            component={() => <div>Hey, this page does not exist!</div>}
          />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
