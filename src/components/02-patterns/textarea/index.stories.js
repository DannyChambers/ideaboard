
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Textarea from "./index";

storiesOf("Components/Patterns/Textarea", module)
  .add("Default", () => (
    <Textarea placeholder="New idea.." onBlur="" />
  ));