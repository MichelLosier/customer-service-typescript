import React from "react";
import "../../sass/styles.scss";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import CustomersView from "../CustomersView";
import { customerService } from "../../services";

export default class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="customer-app">
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/customers" />
            </Route>
            <Route
              path="/customers"
              render={({ history, location }) => {
                return <CustomersView customerService={customerService} history={history} location={location} />;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
