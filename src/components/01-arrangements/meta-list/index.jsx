
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export default class MetaList extends Component {
  render() {

    //const { } = this.props;

    return (
      <div class="meta-list">

        <p class="meta-list_title">Sort by:</p>
        
        <ul class="meta-list_ul">
          <li class="meta-list_item"><a href="#n">Date created</a></li>
          <li class="meta-list_item"><a href="#n">Alphabetical</a></li>
        </ul>

      </div>
    );
  }
}

MetaList.propTypes = {

};

MetaList.defaultProps = {

};