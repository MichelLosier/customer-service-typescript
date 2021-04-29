import React from "react";
import PropTypes from "prop-types";

export default class SearchField extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeHolderText: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { placeHolderText, value, onChange } = this.props;

    return (
      <div className="search-field">
        <input
          type="text"
          role="searchbox"
          placeholder={placeHolderText}
          value={value || ""}
          onChange={(evt) => {
            onChange(evt);
          }}
        />
      </div>
    );
  }
}
