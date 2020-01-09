
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export default class MetaList extends Component {
  render() {

    const { created, updated } = this.props;

    let createdVis = "hidden";

    if(this.props.updated){

      createdVis = "";

    }

    return (
      <div className="meta-list">
        
        <ul className="meta-list_ul">
          <li className="meta-list_item">Created: {created}</li>
          <li className={`${createdVis} meta-list_item`}>Updated: {updated}</li>
        </ul>

      </div>
    );
  }
}

MetaList.propTypes = {
  created: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
};

MetaList.defaultProps = {
  created: "",
  updated: "",
};