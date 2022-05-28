import React, { useEffect, useMemo, useState } from "react";
import { v4 } from "uuid";

import "./Home.css";

const initialData = [
  { id: v4(), color: "red", display: "block", screenCount: 1 },
  { id: v4(), color: "blue", display: "block", screenCount: 2 },
  { id: v4(), color: "yellow", display: "block", screenCount: 3 },
  { id: v4(), color: "orange", display: "block", screenCount: 4 },
  { id: v4(), color: "green", display: "block", screenCount: 5 },
];

const Home = () => {
  const [input, setInput] = useState("");

  const [color, setColor] = useState(initialData);

  const [shootingColor, setShootingColor] = useState([]);

  const moveToBox = (id) => {
    const newColor = color.map((item) => {
      if (item.screenCount === +input) {
        item.display = "none";
        item.screenCount = 0;
        setShootingColor((prev) => [...prev, item]);
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

    setColor(newOrder);
  };

  useEffect(() => {
    console.log(shootingColor);
  }, [shootingColor]);

  const moveToCircle = (id) => {
    const newShootingColorArray = shootingColor.filter(
      (item) => item.id !== id
    );
    setShootingColor(newShootingColorArray);

    const newColorArray = color.map((item) => {
      if (item.id === id) {
        item.display = "block";
      }
      return item;
    });

     let count=1;
      const newScreenOrder=newColorArray.map((item) => {
        if (item.display === "block") {
          item.screenCount = count;
          count++;
        }
        return item;
      });

       setColor(newScreenOrder)
  };

  return (
    <div className="container">
      <div className="emptyDiv">
        {shootingColor[0] &&
          shootingColor.map((colorItem) => {
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
      <div className="circleDiv">
        {color &&
          color.map((item) => {
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
      <div className="buttonDiv">
        <input
          type="number"
          value={input}
          placeholder="Enter Number"
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => moveToBox()}>shoot</button>
      </div>
      .
    </div>
  );
};

export default Home;
