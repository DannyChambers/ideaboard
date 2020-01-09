
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export default class Container extends Component {
  render() {

    const { text } = this.props;

    return (
      <div class="container">
		{this.props.children}
      </div>

    );
  }
}

Container.propTypes = {

};

Container.defaultProps = {

};