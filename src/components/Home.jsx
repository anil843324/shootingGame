import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

import "./Home.css";

// initial Source Data
const initialData = [
  { id: v4(), color: "red", display: "block", screenCount: 1 },
  { id: v4(), color: "blue", display: "block", screenCount: 2 },
  { id: v4(), color: "yellow", display: "block", screenCount: 3 },
  { id: v4(), color: "orange", display: "block", screenCount: 4 },
  { id: v4(), color: "green", display: "block", screenCount: 5 },
];

// state of source container --> source
// state of empty Div --> target

const Home = () => {
  const [input, setInput] = useState("");

  const [source, setSource] = useState(initialData);

  const [target, setTarget] = useState([]);

  //   function to move  a ball from source to target
  const moveToBox = () => {
    const newColor = source.map((item) => {
      if (item.screenCount === +input) {
        item.display = "none";
        item.screenCount = 0;
        setTarget((prev) => [...prev, item]);
      }
      return item;
    });
    let count = 1;
    const newOrder = newColor.map((item) => {
      if (item.display === "block") {
        item.screenCount = count;
        count++;
      }
      return item;
    });

    setSource(newOrder);
  };

  // function to move a ball from target to source
  const moveToCircle = (id) => {

    const newtargetArray = target.filter((item) => item.id !== id);

    setTarget(newtargetArray);

    const newColorArray = source.map((item) => {
      if (item.id === id) {
        item.display = "block";
      }
      return item;
    });

    let count = 1;
    const newScreenOrder = newColorArray.map((item) => {
      if (item.display === "block") {
        item.screenCount = count;
        count++;
      }
      return item;
    });

    setSource(newScreenOrder);
  };

  return (
    <div className="container">
      {/*  empty Div */}
      <div className="emptyDiv">
        {target[0] &&
          target.map((colorItem) => {
            return (
              <div
                key={colorItem.id}
                className="circle boxcircle"
                style={{ backgroundColor: `${colorItem.color}` }}
                onClick={() => {
                  moveToCircle(colorItem.id);
                }}
              ></div>
            );
          })}
      </div>

      {/*  Circle div */}

      <div className="circleDiv">
        {source &&
          source.map((item) => {
            return (
              <div
                key={item.id}
                className="circle"
                style={{
                  backgroundColor: `${item.color} `,
                  display: `${item.display}`,
                }}
              ></div>
            );
          })}
      </div>

      {/*  Button  Div */}

      <div className="buttonDiv">
        <input
          type="number"
          value={input}
          placeholder="Enter Number"
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => moveToBox()}>shoot</button>
      </div>
    </div>
  );
};

export default Home;
