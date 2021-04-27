import React from "react";
import PropTypes from "prop-types";

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
      return (
        <div key={i} className="customer-list__item">
          <div>{customer.firstName}</div>
          <div>{customer.lastName}</div>
          <div>{customer.company.name}</div>
        </div>
      );
    });
  }

  render() {
    const { customers } = this.props;
    return <div className="customer-list">{customers && this.customerListItems(customers)}</div>;
  }
}
