import React from "react";

export const FormBtn = props => (
  <button className={props.classItem} {...props} style={{ float: "right", marginBottom: 10, marginLeft: 25}} >
    {props.children}
  </button>
);
