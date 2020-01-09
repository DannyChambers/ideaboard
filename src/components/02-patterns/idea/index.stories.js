
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Idea from "./index";

storiesOf("Components/Patterns/Idea", module)
  .add("Default", () => (
    <Idea classes="" title="The title of a wonderful idea.." description="A description of the idea..."  created="07/01/20" updated="09/01/20">

    </Idea>
  ))
   .add("New idea", () => (
    <Idea classes="idea--new" title="Click here to get started!" description="Also, you can add a description of the idea..."  created="07/01/20" updated="09/01/20">

    </Idea>
  ));