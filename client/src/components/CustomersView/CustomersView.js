import React from "react";
import PropTypes from "prop-types";

import CustomerList from "../CustomerList";

export default class CustomersView extends React.Component {
  static propTypes = {
    customerService: PropTypes.shape({
      getCustomers: PropTypes.func,
    }),
  };
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    const { customerService } = this.props;
    customerService.getCustomers().then((result) => {
      const { data } = result;
      this.setState({
        customers: data.searchCustomers.customers,
      });
    });
  }

  render() {
    const { customers } = this.state;
    return (
      <div className="customers-view">
        <div className="customers-view__header">
          <div className="customers-view__title">
            <h1>Customers</h1>
          </div>
        </div>
        <div className="customers-view__content">
          <CustomerList customers={customers} />
        </div>
      </div>
    );
  }
}
