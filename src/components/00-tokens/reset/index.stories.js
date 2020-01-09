
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Colours from "./index";

storiesOf("Components/Tokens/Reset", module)
  .add("Default", () => (
    <Colours />
  ));