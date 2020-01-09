
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Fonts from "./index";

storiesOf("Components/Tokens/Fonts", module)
  .add("Default", () => (
    <Fonts />
  ));