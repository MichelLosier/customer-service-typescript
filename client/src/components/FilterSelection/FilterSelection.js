import React from "react";
import PropTypes from "prop-types";

export default class FilterSelection extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.any,
      })
    ),
    onChange: PropTypes.func,
    selectedValue: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };

    this.handleSelectedItemClick = this.handleSelectedItemClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  optionsList(options) {
    return options.map((option, i) => {
      return (
        <div
          role="listitem"
          aria-label={option.name}
          className={"selection-item"}
          key={`${i}-${option.value}`}
          onClick={() => this.handleItemClick(option.value)}
        >
          {option.name}
        </div>
      );
    });
  }

  handleSelectedItemClick() {
    this.setState((prevState) => {
      return {
        collapsed: !prevState.collapsed,
      };
    });
  }

  handleItemClick(evt) {
    const { onChange } = this.props;
    this.setState({ collapsed: true });
    onChange(evt);
  }

  findSelectedOption(selectedValue, defaultValue, options) {
    let defaultOption;
    let selectedOption = null;

    for (let i = 0; i < options.length; i++) {
      const option = options[i];

      if (option.value == defaultValue) {
        defaultOption = option;
      }

      if (option.value == selectedValue) {
        selectedOption = option;
        break;
      }
    }

    return selectedOption || defaultOption;
  }

  render() {
    const { collapsed } = this.state;
    const { options, selectedValue, defaultValue } = this.props;
    const selectedOption = this.findSelectedOption(selectedValue, defaultValue, options);

    return (
      <div className="filter-selection" role="listbox">
        <div
          role="listitem"
          className="selected-item"
          onClick={this.handleSelectedItemClick}
          aria-label={`Selected company: ${selectedOption.name}`}
        >
          {selectedOption.name}
        </div>
        <div role="list" className="selection-items">
          {!collapsed && this.optionsList(options)}
        </div>
      </div>
    );
  }
}
