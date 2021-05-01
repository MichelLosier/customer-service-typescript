import React from "react";
import PropTypes from "prop-types";

import CustomerList from "../CustomerList";
import SearchField from "../SearchField";

import { debounce } from "../../utils";
import FilterSelection from "../FilterSelection";

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
      companies: [],
      errors: [],
      loading: true,
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleCompanyFilterChange = this.handleCompanyFilterChange.bind(this);
    this.getCustomers = debounce(this.getCustomers.bind(this), 1000);
  }

  async componentDidMount() {
    await this.getCustomers();
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  async getCustomers() {
    this.setState({
      loading: true,
    });

    const { customerService, location } = this.props;
    const searchParams = new URLSearchParams(location.search);

    const searchCriteria = {
      name: searchParams.get("search"),
      companyName: searchParams.get("filter_by_company_name"),
    };

    let errors = [];

    const result = await customerService.getCustomers(searchCriteria).catch((error) => {
      errors.push(error);
    });

    const queryErrors = result?.errors;
    const searchCustomersErrors = result?.data?.searchCustomers?.errors;
    const getAllCompaniesErrors = result?.data?.getAllCompanies?.errors;

    errors = [...errors, ...(queryErrors || []), ...(searchCustomersErrors || []), ...(getAllCompaniesErrors || [])];

    const customers = result?.data?.searchCustomers?.customers || [];
    const companies = result?.data?.getAllCompanies?.companies || [];

    this.setState({
      customers: customers,
      companies: companies,
      errors: errors,
      loading: false,
    });
  }

  errorMessages(errors) {
    return errors.map((error, i) => {
      return <div key={i}>{error.message}</div>;
    });
  }

  handleSearchChange(value) {
    const { history, location } = this.props;
    const searchParams = new URLSearchParams(history.location.search);

    searchParams.set("search", value);

    const newParamString = searchParams.toString();
    const newLocationString = `${location.pathname}?${newParamString}`;

    history.push(newLocationString);

    this.getCustomers();
  }

  handleCompanyFilterChange(value) {
    const { history, location } = this.props;
    const searchParams = new URLSearchParams(history.location.search);

    searchParams.set("filter_by_company_name", value);

    const newParamString = searchParams.toString();
    const newLocationString = `${location.pathname}?${newParamString}`;

    history.push(newLocationString);

    this.getCustomers();
  }

  filterOptions(companies) {
    const allCompaniesOption = {
      name: "All Companies",
      value: "",
    };
    const options = [allCompaniesOption];

    companies.forEach((company) => {
      options.push({ value: company.name, name: company.name });
    });

    return options;
  }

  render() {
    const { customers, companies, errors, loading } = this.state;
    const { location } = this.props;
    const searchParams = new URLSearchParams(location.search);
    const nameSearchTerm = searchParams.get("search");
    const companyFilter = searchParams.get("filter_by_company_name");

    return (
      <div className="customers-view">
        <div className="customers-view__header">
          <div className="customers-view__title">
            <h1>Customers</h1>
          </div>
          <div className="search-control">
            <label>Search by company name:</label>
            <SearchField
              value={nameSearchTerm}
              placeHolderText="Search customers by first or last name"
              label="Name Search"
              onChange={this.handleSearchChange}
            />
          </div>
          <div className="search-control">
            <label>Filter by company: </label>
            <FilterSelection
              onChange={this.handleCompanyFilterChange}
              defaultValue={""}
              selectedValue={companyFilter}
              options={this.filterOptions(companies)}
            />
          </div>
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
