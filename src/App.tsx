import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Home from "./pages/home";
import JobsByMajor from "./pages/jobs_by_major";

const client = new ApolloClient({
  uri: process.env.REACT_APP_JOBS_API_URL
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/curso" component={JobsByMajor} />
          <Route
            path="/"
            component={() => <div>Hey, this page does not exist!</div>}
          />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
