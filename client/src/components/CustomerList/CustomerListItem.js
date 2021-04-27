import React from "react";
import PropTypes from "prop-types";

export default class CustomerListItem extends React.Component {
  static propTypes = {
    customer: PropTypes.shape({
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

  render() {
    const { customer } = this.props;

    return (
      <div className="customer-list__item">
        <div className="customer-list__item-field name">
          <div className="label">Name:</div>
          <div className="value">{`${customer.firstName} ${customer.lastName}`}</div>
        </div>
        <div className="customer-list__item-field company">
          <div className="label">Company:</div>
          <div className="value">{customer.company.name}</div>
        </div>
      </div>
    );
  }
}
