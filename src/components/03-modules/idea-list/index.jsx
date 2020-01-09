
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

//Tokens

//Arrangements

//Patterns
import Idea   from "../../02-patterns/idea/index";

//Modules

//Pages

export default class IdeaList extends Component {
  render() {

    //const { } = this.props;

    return (
      <ul class="idea-list">
        <Idea title="Remember to stay up late and build that thing 1" description="A description of how to do the thing with a maximum of 140 characters..." />
        <Idea title="Remember to stay up late and build that thing 2" description="A description of how to do the thing with a maximum of 140 characters..."  />
        <Idea title="Remember to stay up late and build that thing 3" description="A description of how to do the thing with a maximum of 140 characters..."  />
        <Idea title="Remember to stay up late and build that thing 4" description="A description of how to do the thing with a maximum of 140 characters..."  />
        <Idea title="Remember to stay up late and build that thing 5" description="A description of how to do the thing with a maximum of 140 characters..."  />
      </ul>
    );
  }
}

IdeaList.propTypes = {

};

IdeaList.defaultProps = {

};