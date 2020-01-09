
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

import AppHeader from "../../03-modules/app-header/index";

export default class Home extends Component {
  render() {

    //const {  } = this.props;

    return (
      <div class="home">
        <AppHeader />
      </div>
    );
  }
}

Home.propTypes = {

};

Home.defaultProps = {

};