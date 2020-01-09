
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createIdea, updateIdea, deleteIdea } from '../../../actions/index';

import "./index.module.scss";

//Tokens

//Arrangements

//Patterns
import Idea   from    "../../02-patterns/idea/index";
import Button from    "../../02-patterns/button/index";
import Textarea from  "../../02-patterns/textarea/index";

//Modules

//Pages

class IdeaList extends Component {

  newIdea = {
    id: "",
    title: "Add a new idea!",
    description: "You can also add a description..",
    created: "",
    updated: ""
  }

  handleTitleBlur = (e) => {

    this.newIdea.title = e.target.value;

  }

  handleDescBlur = (e) => {

    this.newIdea.description = e.target.value;

  }

  handleAdd = () => {

    this.props.addAnIdea(this.newIdea);

  }

  render() {

    const { ideas } = this.props;

    const ideaList = ideas.length ? (
      ideas.map(idea => {

      return (

          <li className="idea-list_ul-item" key={idea.id}>
            <Idea classes="" title={idea.title} id={idea.id} description={idea.description} created={idea.created} updated={idea.updated} />
          </li>

      )

    }) 

    ) : (

      <p></p>

    )

    return (

      <div className="idea-list">
          <ul className="idea-list_ul">
            <li className="idea-list_ul-item" key="0">

              <div className="idea idea--new">

                <Textarea maxlength="40" placeholder={this.newIdea.title} classes="idea_title" onBlur={this.handleTitleBlur} />

                <Textarea maxlength="140" placeholder={this.newIdea.description} classes="idea_description" onBlur={this.handleDescBlur} />
                
                <Button variant="secondary" text="Add new" onClick={this.handleAdd} />

              </div>

            </li>

              {ideaList}
          
          </ul>
        </div>
    );
  }
}

IdeaList.propTypes = {

};

IdeaList.defaultProps = {

};

const mapDispatchToProps = (dispatch) => {
  return {
    addAnIdea: (ideaData) => { dispatch(createIdea(ideaData)) },
    updateIdea: (ideaData) => { dispatch(updateIdea(ideaData)) },
    deleteAnIdea: (id) => { dispatch(deleteIdea(id)) }
  }
}

export default connect(null, mapDispatchToProps)(IdeaList)


