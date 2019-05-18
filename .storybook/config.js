import { configure } from "@storybook/react";
import "@storybook/addon-console";

function loadStories() {
  require("../stories/index.js");
}

configure(loadStories, module);
