
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createIdea, updateIdea, deleteIdea } from '../../../actions/index';

import "./index.module.scss";

//Tokens

//Arrangements
import Icon from  "../../01-arrangements/icon/index";
import MetaList from  "../../01-arrangements/meta-list/index";

//Patterns
import Button from    "../../02-patterns/button/index";
import Textarea from  "../../02-patterns/textarea/index";

//Modules

//Pages

class Idea extends Component {

  modifiedIdea = {
    title: "",
    description: "",
  }

  handleTitleBlur = (e) => {

    this.modifiedIdea.title = e.target.value;
    this.props.updateAnIdea(this.modifiedIdea, this.props.id);

    //this.modifiedIdea.title = "";

  }

  handleDescBlur = (e) => {

    this.modifiedIdea.description = e.target.value;
    this.props.updateAnIdea(this.modifiedIdea, this.props.id);

    //this.modifiedIdea.description = "";

  }

  handleDelete = () => {
    
    this.props.deleteAnIdea(this.props.id)

  }

  render() {

    //console.log("in Idea props are: ", this.props);

    const { classes, id, title, description, created, updated } = this.props;

    return (
      <div className={`idea ${this.props.classes}`}>

        <Button variant="icononly" text="Close" onClick={this.handleDelete}>
          <span className="button_text">{this.props.text}</span>
          <Icon graphic="cross" position="before" />
        </Button>

        <Textarea maxlength="40" placeholder={this.props.title} classes="idea_title" onBlur={(e) => {this.handleTitleBlur(e)}} />

        <Textarea maxlength="140" placeholder={this.props.description} classes="idea_description" onBlur={(e) => {this.handleDescBlur(e)}} />

        {this.props.children}

        <MetaList created={this.props.created} updated={this.props.updated} />

      </div>
    );
  }
}

Idea.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  created: PropTypes.string,
  update: PropTypes.string,
};

Idea.defaultProps = {
  classes: "",
  title: "Idea title",
  description: "A description of the idea..",
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAnIdea: (ideaData, id) => { dispatch(updateIdea(ideaData, id)) },
    deleteAnIdea: (id) => { dispatch(deleteIdea(id)) }
  }
}

export default connect(null, mapDispatchToProps)(Idea)



