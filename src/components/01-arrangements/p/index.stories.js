
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import P from "./index";

storiesOf("Components/Arrangements/Paragraph", module)
  .add("Default", () => (
    <P text="This is a paragraph of text" />
  ));