
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export default class P extends Component {
  render() {

    const { text } = this.props;

    return (
      <P className={`p ${this.props.classes}`}>{text}</P>

    );
  }
}

P.propTypes = {
  classes: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

P.defaultProps = {
  classes: "",
  text: "The Quick Brown Fox Jumps Over The Lazy Dog",
};