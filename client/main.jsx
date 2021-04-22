import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

Meteor.startup(() => {
  render(<div>ok!</div>, document.getElementById("react-target"));
});
