
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";
import autosize from "autosize";

export default class Textarea extends Component {

	componentDidMount() {
		//this.textarea.focus();
		autosize(this.textarea);
	}

	state = {
		chars_left: this.props.maxlength,
	}

	handleWordCount = event => {
		const charCount = event.target.value.length;
		const charLeft = 140 - charCount;
		this.setState({ chars_left: charLeft});
	}

	handleBlur = (e) => {
		this.props.onBlur(e);
	}

	render() {

	    const style = {
	      maxHeight: "100px",
	      minHeight: "40px",
	      resize: "none",
	    };

	    const { classes, placeholder, maxlength, onBlur } = this.props;

	    return (<div className={`textarea ${this.props.classes}`}>
	      			<textarea className="input" style={style} ref={c => (this.textarea = c)} maxLength={this.props.maxlength} onFocus={this.handleWordCount} onChange={this.handleWordCount} onBlur={(e) => this.handleBlur(e)}>{this.props.placeholder}</textarea>
	      			<p className="charCount">{this.state.chars_left} characters remaining</p>
	      		</div>
	    );
	  }
	}

Textarea.propTypes = {
  classes: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  maxlength: PropTypes.string,
};

Textarea.defaultProps = {
  classes: "",
  placeholder: "Placeholder..",
  maxlength: "40",
};