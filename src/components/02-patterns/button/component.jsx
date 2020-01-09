
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export default class Button extends Component {
  render() {

    const { onClickHandler, label } = this.props;

    return (
      <button onClick={event => onClickHandler(event.target)}>
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClickHandler: () => console.log("No click handler specified"),
  label: "",
};