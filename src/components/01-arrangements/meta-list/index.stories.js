
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MetaList from "./index";

storiesOf("Components/Arrangements/Meta list", module)
  .add("Default", () => (
    <MetaList/>
  ));