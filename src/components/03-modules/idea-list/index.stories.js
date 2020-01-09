
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import IdeaList from "./index";

storiesOf("Components/Modules/Idea list", module)
  .add("Default", () => (
    <IdeaList />
  ));