import React, { useState } from "react";
import HidatoCell from "./HidatoCell";

function generateInitialPoints() {
  const pointRangeForEveryRow = [
    { startX: 0, endX: 4 },
    { startX: 0, endX: 4 },
    { startX: 0, endX: 5 },
    { startX: 0, endX: 5 },
    { startX: 0, endX: 6 },
    { startX: 2, endX: 6 },
    { startX: 4, endX: 7 },
    { startX: 6, endX: 7 }
  ];
  return pointRangeForEveryRow.map(({ startX, endX }, r) =>
    new Array(8).fill(0).map((_, c) => ({
      r: r,
      c: c,
      visible: c >= startX && c <= endX,
      value: "",
      fromInput: false
    }))
  );
}

function getNonEmptyVisiblePoints(points) {
  return points.reduce((prev, curr) => {
    const nonEmptyVisiblePoints = curr.filter(point => {
      return point.visible && point.value != "";
    });
    return prev.concat(
      nonEmptyVisiblePoints.map(point => ({
        r: point.r,
        c: point.c,
        value: Number(point.value)
      }))
    );
  }, []);
}

function getSetOfInputtedValues(points) {
  return new Set(getNonEmptyVisiblePoints(points).map(point => point.value));
}

function HidatoGrid() {
  const [points, setState] = useState(generateInitialPoints());
  return (
    <React.Fragment>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 2.5rem)",
          gridTemplateRows: "repeat(8, 2.5rem)"
        }}
      >
        {points.reduce(
          (prev, curr) =>
            prev.concat(
              curr.map(cell => (
                <HidatoCell
                  key={`hidato-cell-${cell.r}-${cell.c}`}
                  callback={newValue => {
                    const newPoints = points.map((row, r) =>
                      r !== cell.r
                        ? row
                        : row.map((col, c) =>
                            c !== cell.c
                              ? col
                              : {
                                  ...col,
                                  value: newValue,
                                  fromInput: true
                                }
                          )
                    );
                    setState(newPoints);
                  }}
                  {...cell}
                  uniqueValues={getSetOfInputtedValues(points)}
                />
              ))
            ),
          []
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "1rem"
        }}
      >
        <button onClick={() => solveHidato(getNonEmptyVisiblePoints(points))}>
          Solve
        </button>
        <button
          style={{ marginLeft: "1rem" }}
          onClick={() => setState(generateInitialPoints())}
        >
          Clear
        </button>
      </div>
    </React.Fragment>
  );
}

function solveHidato(points) {
  points.sort((a, b) => a.value - b.value);
  console.log(points);
  if (
    points.length < 2 ||
    points[0].value !== 1 ||
    points[points.length - 1].value !== 40
  ) {
    window.alert("Please input 1 and 40");
  }
}

export default HidatoGrid;
