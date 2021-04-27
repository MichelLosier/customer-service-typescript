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
      errors: [],
    };
  }

  async componentDidMount() {
    await this.getCustomers();
  }

  async getCustomers() {
    const { customerService } = this.props;
    let errors = [];

    const result = await customerService.getCustomers().catch((error) => {
      errors.push(error);
    });

    const queryErrors = result?.errors;
    const searchCustomersErrors = result?.data?.searchCustomers?.errors;

    if (queryErrors) {
      errors = errors.concat(queryErrors);
    }

    if (searchCustomersErrors) {
      errors = errors.concat(searchCustomersErrors);
    }
    const customers = result?.data?.searchCustomers?.customers || [];

    this.setState({
      customers: customers,
      errors: errors,
    });
  }

  errorMessages(errors) {
    return errors.map((error, i) => {
      return <div key={i}>{error.message}</div>;
    });
  }

  render() {
    const { customers, errors } = this.state;

    return (
      <div className="customers-view">
        <div className="customers-view__header">
          <div className="customers-view__title">
            <h1>Customers</h1>
          </div>
        </div>
        <div className="customers-view__content">
          {errors?.length > 0 ? this.errorMessages(errors) : <CustomerList customers={customers} />}
        </div>
      </div>
    );
  }
}
