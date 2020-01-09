
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export default class Icon extends Component {
  render() {

    const { graphic, positon } = this.props;

    return (
      <span className={`icon--${this.props.graphic} icon--${this.props.position}`}></span>
    );
  }
}

Icon.propTypes = {
  graphic: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  graphic: "",
  position: "",
};