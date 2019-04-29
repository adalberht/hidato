import React, { useState, useEffect } from "react";

function HidatoCell(props) {
  function getBackgroundColor() {
    if (props.value == 1 || props.value == 40) {
      return "red";
    } else if (props.fromInput) {
      return "cyan";
    }
    return "white";
  }

  function getFontColor() {
    if (props.value == 1 || props.value == 40) {
      return "white";
    } else if (false) {
      return "black";
    } else {
      return "green";
    }
  }

  return (
    <input
      key={`hidato-cell-${props.row}-${props.column}`}
      className="hidato-cell"
      style={{
        textAlign: "center",
        border: "1px solid gray",
        visibility: props.visible ? "visible" : "hidden",
        backgroundColor: getBackgroundColor(),
        transition: "all 0.5s",
        fontSize: "1.2rem",
        color: getFontColor()
      }}
      value={props.value}
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
