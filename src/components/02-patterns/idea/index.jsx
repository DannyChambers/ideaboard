
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

//Tokens

//Arrangements
import H2 from "../../01-arrangements/h2/index";
import P from "../../01-arrangements/p/index";

//Patterns

//Modules

//Pages

export default class Idea extends Component {
  render() {

    //const { } = this.props;

    return (
      <div class="idea">
        <H2 text="{this.props.title}"/>
        <P text="{this.props.description}"/>
      </div>
    );
  }
}

Idea.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Idea.defaultProps = {
  title: "",
  description: "",
};