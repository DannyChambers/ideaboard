
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Container from "./index";

storiesOf("Components/Arrangements/Container", module)
  .add("Default", () => (
    <Container/>
  ));