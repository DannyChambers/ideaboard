
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export default class H2 extends Component {
  render() {

    const { classes, text } = this.props;

    return (
      <h2 className={`h2 ${this.props.classes}`}>{text}</h2>

    );
  }
}

H2.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string.isRequired,
};

H2.defaultProps = {
  classes: "",
  text: "The Quick Brown Fox Jumps Over The Lazy Dog",
};