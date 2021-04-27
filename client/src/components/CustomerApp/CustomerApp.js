import React from "react";
import "../../sass/styles.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CustomersView from "../CustomersView";
import { customerService } from "../../services";

export default class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="customer-app">
        <Router>
          <Switch>
            <Route path="/customers">
              <CustomersView customerService={customerService} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
