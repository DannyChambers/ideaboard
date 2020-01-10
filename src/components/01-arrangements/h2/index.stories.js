
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import H2 from "./index";

storiesOf("Components/Arrangements/Heading two", module)
  .addParameters({ jest: ['H2'] })
  .add(
    'h2.test.js',
    () => <div>Jest results in storybook</div>
  )
  .add("Default", () => (
    <H2 classes="" text="This is a heading two" />
  ));