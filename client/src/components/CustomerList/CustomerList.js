import React from "react";
import PropTypes from "prop-types";

import CustomerListItem from "./CustomerListItem";

export default class CustomerList extends React.Component {
  static propTypes = {
    customers: PropTypes.arrayOf({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      company: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  };

  constructor(props) {
    super(props);
  }

  customerListItems(customers) {
    return customers.map((customer, i) => {
      return <CustomerListItem customer={customer} key={i} />;
    });
  }

  render() {
    const { customers } = this.props;
    return <div className="customer-list">{customers && this.customerListItems(customers)}</div>;
  }
}
