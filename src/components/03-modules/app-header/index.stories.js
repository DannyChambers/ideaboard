
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./index";

storiesOf("Components/Modules/App header", module)
  .add("Default", () => (
    <Button
      onClick={action("clicked")}
      label="Tertiary"
    />
  ));