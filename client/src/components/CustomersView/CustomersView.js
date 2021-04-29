import React from "react";
import PropTypes from "prop-types";

import CustomerList from "../CustomerList";
import SearchField from "../SearchField";

import { debounce } from "../../utils";

export default class CustomersView extends React.Component {
  static propTypes = {
    customerService: PropTypes.shape({
      getCustomers: PropTypes.func,
    }),
    history: PropTypes.object,
    location: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      errors: [],
      loading: true,
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.getCustomers = debounce(this.getCustomers.bind(this), 1000);
  }

  async componentDidMount() {
    const { location } = this.props;
    const searchParams = new URLSearchParams(location.search);
    await this.getCustomers({
      name: searchParams.get("search"),
    });
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  async getCustomers(searchParams) {
    this.setState({
      loading: true,
    });
    const { customerService } = this.props;
    let errors = [];

    const result = await customerService.getCustomers(searchParams).catch((error) => {
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
      loading: false,
    });
  }

  errorMessages(errors) {
    return errors.map((error, i) => {
      return <div key={i}>{error.message}</div>;
    });
  }

  handleSearchChange(evt) {
    const { history, location } = this.props;
    const searchParams = new URLSearchParams(history.location.search);

    searchParams.set("search", evt.target.value);

    const newParamString = searchParams.toString();
    const newLocationString = `${location.pathname}?${newParamString}`;

    history.push(newLocationString);
    this.getCustomers({
      name: evt.target.value,
    });
  }

  render() {
    const { customers, errors, loading } = this.state;
    const { location } = this.props;
    const searchParams = new URLSearchParams(location.search);
    const nameSearchTerm = searchParams.get("search");

    return (
      <div className="customers-view">
        <div className="customers-view__header">
          <div className="customers-view__title">
            <h1>Customers</h1>
          </div>
          <SearchField
            value={nameSearchTerm}
            placeHolderText="Search customers by first or last name"
            label="Name Search"
            onChange={this.handleSearchChange}
          />
        </div>
        <div className="customers-view__content">
          {customers?.length == 0 && !loading && <div>No customers found matching this criteria.</div>}
          {errors?.length > 0 && this.errorMessages(errors)}
          {customers?.length > 0 && errors?.length == 0 && <CustomerList customers={customers} />}
        </div>
      </div>
    );
  }
}
