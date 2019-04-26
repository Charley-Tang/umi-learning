import React from "react";

const titleTool = {
  center: function(component) {
    return <div style={{ textAlign: "center" }}>{component}</div>;
  },
  left: function(component) {
    return <div style={{ textAlign: "left" }}>{component}</div>;
  },
  right: function(component) {
    return <div style={{ textAlign: "right" }}>{component}</div>;
  }
};

export default titleTool;
