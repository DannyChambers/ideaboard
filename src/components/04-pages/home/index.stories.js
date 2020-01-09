
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Home from "./index";

storiesOf("Components/Pages/Home", module)
  .add("Default", () => (
    <Home />
  ));