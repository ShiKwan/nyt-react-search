import React from "react";
import "./SaveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
    <button type='button' className="save-btn" onClick={() => props.handleSubmit(props.id)}>
        Save Article - {props.id}
  </button>
);

export default SaveBtn;
