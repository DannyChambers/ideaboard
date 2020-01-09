
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export default class TextInput extends Component {
  render() {

    const { placeholder } = this.props;

    return (
      <input type="text" name="abc" value="" placeholder={this.props.placeholder} className="text-input" />
    );
  }
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  placeholder: "Placeholder..",
};