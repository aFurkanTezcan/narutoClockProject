"use strict";

const time = function () {
  // variables
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";
  let clock = document.getElementById("clock");
  // make clock to AM-PM type
  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
  }

  // make sure that there is always 2 digits for every element
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // DOM and set timeout
  clock.innerText = `${hours}:${minutes}:${seconds} ${meridian} dattebayo!`;
};
setInterval(time, 1000);

/////////////////////////////////////////////
// TO DO LIST

// make a function that looks at the time and time selector and display the image and text for selected time and activity
// take the input values and take hour value make an if statement with them
// adding saved activities to table
