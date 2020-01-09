
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import H2 from "./index";

storiesOf("Components/Arrangements/Heading two", module)
  .add("Default", () => (
    <H2 classes="" text="This is a heading two" />
  ));