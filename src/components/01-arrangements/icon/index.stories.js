
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Icon from "./index";

storiesOf("Components/Arrangements/Icon", module)
  .add("Default", () => (
    <Icon position="before" graphic="cross" />
  ));