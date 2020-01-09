
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TextInput from "./index";

storiesOf("Components/Patterns/Text input", module)
  .add("Default", () => (
    <TextInput placeholder="New idea.." />
  ));