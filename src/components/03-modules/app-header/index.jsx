
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

//Tokens

//Arrangements
import Container from "../../01-arrangements/container/index";
import MetaList from "../../01-arrangements/meta-list/index";

//Patterns
import Logo 	from "../../02-patterns/logo/index";

//Modules

//Pages


export default class AppHeader extends Component {
  render() {

    //const {  } = this.props;

    return (
      <div class="app-header">
      	<Container>
	        <Logo />
	        <MetaList />
        </Container>
      </div>
    );
  }
}

AppHeader.propTypes = {

};

AppHeader.defaultProps = {

};