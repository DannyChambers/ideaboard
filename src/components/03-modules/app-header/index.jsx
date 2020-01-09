
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

//Tokens

//Arrangements
import Container from "../../01-arrangements/container/index";
import SortList from "../../01-arrangements/sort-list/index";

//Patterns
import Logo 	from "../../02-patterns/logo/index";

//Modules

//Pages


export default class AppHeader extends Component {
  render() {

    //const {  } = this.props;

    return (
      <div className="app-header">
      	<Container>
	        <Logo />
	        <SortList />
        </Container>
      </div>
    );
  }
}

AppHeader.propTypes = {

};

AppHeader.defaultProps = {

};