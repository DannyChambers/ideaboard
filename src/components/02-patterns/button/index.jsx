
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export default class Button extends Component {

  handleClick = () => {

    this.props.onClick();

  }

  render() {

    //const { } = this.props;

    return (
      <button className={`button button--${this.props.variant}`} onClick={this.handleClick}>
        <span className="button_text">{this.props.text}</span>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: "button--primary",
  text: "A button",
};