import React, { useState } from "react";
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
    if (!+input) {
      alert("Please enter some numeric value before hitting the button");
    } else {
      const found = target.find((element) => element.screenCount === +input);
      if (found) {
        alert("This box is already available in the div");
        setInput(" ");
      } else {
        const found = source.find((element) => element.screenCount === +input);

        if (!found) {
          alert("🤠 please enter the value between 1 to 5 🤠");

          setInput(" ");
        } else {
          const newColor = source.map((item) => {
            if (item.screenCount === +input) {
              item.display = "none";
              // item.screenCount = 0;
              setTarget((prev) => [...prev, item]);
            }
            return item;
          });
          setSource(newColor);
          setInput(" ");
        }
      }
    }
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
    setSource(newColorArray);
  };

  return (
    <div className="container">
    
        {/*  title container */}
       <div className="titleContainer">
       <h1 >Hello syngenta</h1>
        <h3>Welcome to the assignment of syngenta!</h3>
       </div>

        {/*  box container */}
          <div className="boxContainer">
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
              >
                <p style={{ textAlign: "center" ,fontWeight:"bold",fontSize:"20px"}}>{colorItem.screenCount}</p>
              </div>
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
              >
                <p style={{ textAlign: "center" ,fontWeight:"bold",fontSize:"20px"}}>{item.screenCount}</p>
              </div>
            );
          })}
      </div>

      {/*  Button  Div */}

      <div className="buttonDiv">
        <input
          type="number"
          value={input}
          placeholder={`Enter the number from 1 to  5`}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => moveToBox()}>Shoot</button>
      </div>
          </div>
    

    </div>
  );
};

export default Home;
