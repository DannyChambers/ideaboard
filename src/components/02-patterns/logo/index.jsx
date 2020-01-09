
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export default class Button extends Component {
  render() {

    //const { } = this.props;

    return (
        <h1 class="logo">
          <a href="/">Ideaboard</a>
        </h1>
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