"use strict";

// CLOCK
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
  if (hours >= 12) {
    meridian = "PM";
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

  // DOM
  clock.innerText = `${hours}:${minutes}:${seconds} ${meridian} dattebayo!`;
};
setInterval(time, 1000);

//////////////////////////////////////////////////////////
// object that hold values that shown in table
const timeActivity = {};

// DOM Variables
const saveButton = document.getElementById("submit");
let selectedActivity = document.getElementById("activity").value;
let startTime = document.getElementById("start-time");
let endTime = document.getElementById("end-time");
const toDoList = document.getElementById("to-do-list");

// event listeners for selector values

document.getElementById("activity").addEventListener("change", function () {
  selectedActivity = document.getElementById("activity").value;
});

document.getElementById("start-time").addEventListener("change", function () {
  startTime = document.getElementById("start-time");
});

document.getElementById("end-time").addEventListener("change", function () {
  endTime = document.getElementById("end-time");
});

// function to saved values added to timeActivity object and shown in table
saveButton.onclick = function () {
  // add new item (activity, start time, end time) to timeActivity object
  timeActivity[selectedActivity] = [startTime.value, endTime.value];

  //add saved activity to table (with start time and end time)
  toDoList.innerHTML += `<tr>
  <th>${startTime.options[startTime.selectedIndex].text} - ${
    endTime.options[endTime.selectedIndex].text
  }</th>
  <th>${selectedActivity}</th>
  </tr>`;

  //  will display assigned activity image according to current hour and activity start hour
  const currentTime2 = new Date();
  for (const [activity, [startTime, endTime]] of Object.entries(timeActivity)) {
    console.log(currentTime2.getHours(), startTime);
    if (currentTime2.getHours() === Number(startTime)) {
      console.log("yeah!");
    }
  }
};

// to

/////////////////////////////////////////////
// TO DO LIST

// make a function that looks at the time and time selector and display the image and text for selected time and activity
