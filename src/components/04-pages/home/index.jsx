
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addAnIdea, updateIdea, deleteIdea } from '../../../actions/index';

import "./index.module.scss";


//Tokens

//Arrangements
import Container from "../../01-arrangements/container/index";

//Patterns
import Idea   from "../../02-patterns/idea/index";

//Modules
import AppHeader from "../../03-modules/app-header/index";
import IdeaList from "../../03-modules/idea-list/index";

//Pages

class Home extends Component {

  render() {

    //console.log("in Home props are: ", this.props);

    const { ideas } = this.props;

    return (
      <div className="home">
        
        <AppHeader />

        <Container>

        	<IdeaList ideas={this.props.ideas} />

	    </Container>

      </div>
    );
  }
}

Home.propTypes = {

};

Home.defaultProps = {

};

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)














