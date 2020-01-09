
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Dimensions from "./index";

storiesOf("Components/Tokens/Dimensions", module)
  .add("Default", () => (
    <Dimensions />
  ));