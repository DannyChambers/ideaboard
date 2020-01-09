
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export default class SortList extends Component {
  render() {

    //const { } = this.props;

    return (
      <div className="sort-list">

        <p className="sort-list_title">Sort by:</p>
        
        <ul className="sort-list_ul">
          <li className="sort-list_item"><a href="#n">Date created</a>,</li>
          <li className="sort-list_item"><a href="#n">Alphabetically</a></li>
        </ul>

      </div>
    );
  }
}

SortList.propTypes = {

};

SortList.defaultProps = {

};