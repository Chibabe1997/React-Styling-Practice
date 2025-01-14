import React from "react";
import ReactDOM from "react-dom";

const currentHour = new Date().getHours();
let greetingText = " ";
// let greetingStyle = {};

const customStlye = {
  color: ""
};

if (currentHour < 12) {
  greetingText = "Good Morning!";
  customStlye.color = "red";
  //   greetingStyle = { color: "red" };
} else if (currentHour >= 12 && currentHour < 18) {
  greetingText = "Good Afternoon!";
  customStlye.color = "green";
  //   greetingStyle = { color: "green" };
} else {
  greetingText = "Good Night!";
  customStlye.color = "blue";
  //   greetingStyle = { color: "blue" };
}

ReactDOM.render(
  <h1 className="heading" style={customStlye}>
    {greetingText}
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
