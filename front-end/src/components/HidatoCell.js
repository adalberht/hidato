import React, { useState, useEffect } from "react";

function HidatoCell(props) {
  function getBackgroundColor() {
    if (props.val == 1 || props.val == 40) {
      return "#d50000";
    } else if (props.fromInput && props.val !== "") {
      return "#4dd0e1";
    }
    return "white";
  }

  function getFontColor() {
    if (props.val == 1 || props.val == 40) {
      return "white";
    } else if (props.fromInput) {
      return "#424242";
    } else {
      return "green";
    }
  }
  return (
    <input
      key={`hidato-cell-${props.row}-${props.col}`}
      className="hidato-cell"
      disabled={!props.fromInput && props.val !== ""}
      style={{
        textAlign: "center",
        border: "1px solid gray",
        visibility: props.visible ? "visible" : "hidden",
        backgroundColor: getBackgroundColor(),
        transition: "all 0.5s",
        fontSize: "1.2rem",
        color: getFontColor()
      }}
      value={props.val}
      onChange={e => {
        e.preventDefault();
        const val = e.target.value;
        const num = Number(e.target.value);

        if (val === "" || (Number.isInteger(num) && num >= 1 && num <= 40)) {
          props.callback(e.target.value);
        } else {
          window.alert(
            "Input must be positive number between 0 and 40 (inclusive)"
          );
        }
      }}
    />
  );
}

export default HidatoCell;
