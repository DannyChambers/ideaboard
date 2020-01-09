
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./index";

import Icon from "../../01-arrangements/icon/index";

storiesOf("Components/Patterns/Button", module)
  .add("Icon only", () => (
    <Button variant="icononly" text="Close">
    	<span className="button_text">{this.props.text}</span>
		<Icon graphic="cross" position="before" />
    </Button>
  ));