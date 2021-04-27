import React from "react";
import PropTypes from "prop-types";

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
    return <div className="customers-view">{JSON.stringify(this.state.customers)}</div>;
  }
}
