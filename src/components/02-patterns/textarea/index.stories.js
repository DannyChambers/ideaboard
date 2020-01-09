
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./component";

storiesOf("Components/Patterns/Textarea", module)
  .add("Default", () => (
    <Button
      onClick={action("clicked")}
      label="Tertiary"
    />
  ));