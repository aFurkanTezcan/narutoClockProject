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
let selectedActivity = document.getElementById("activity");
let startTime = document.getElementById("start-time");
let endTime = document.getElementById("end-time");
const toDoList = document.getElementById("to-do-list");

const imgAll = document.getElementsByTagName("img");

// event listeners for selector values

document.getElementById("activity").addEventListener("change", function () {
  selectedActivity.value = document.getElementById("activity").value;
});

document.getElementById("start-time").addEventListener("change", function () {
  startTime = document.getElementById("start-time");
});

document.getElementById("end-time").addEventListener("change", function () {
  endTime = document.getElementById("end-time");
});

const switchImage = function () {
  //  will display assigned activity image according to current hour and activity start hour
  const currentTime2 = new Date();
  for (const [activity, [startTime, endTime]] of Object.entries(timeActivity)) {
    if (currentTime2.getHours() === Number(startTime)) {
      // in every situation there is one image tag that displaying. so i need to add hidden class to it first then i can display another image
      for (let i = 0; i < imgAll.length; i++) {
        let num = i;
        let img = document.getElementById(`img-${num + 1}`);
        if (!img.classList.contains("hidden")) {
          img.classList.add("hidden");
        }
      }
      // will choose the displayed image
      switch (activity) {
        case "Wake Up":
          document.getElementById("img-1").classList.remove("hidden");
          break;
        case "Breakfast":
          document.getElementById("img-2").classList.remove("hidden");
          break;
        case "Kiss Sasuke":
          document.getElementById("img-3").classList.remove("hidden");
          break;
        case "Practice Jutsu":
          document.getElementById("img-4").classList.remove("hidden");
          break;
        case "Ero Sennin Time":
          document.getElementById("img-5").classList.remove("hidden");
          break;
        case "Save Konoha":
          document.getElementById("img-6").classList.remove("hidden");
          break;
        case "Meditation":
          document.getElementById("img-7").classList.remove("hidden");

          break;
        case "Dinner":
          document.getElementById("img-8").classList.remove("hidden");
          break;
        case "Sleep":
          document.getElementById("img-9").classList.remove("hidden");
          break;
      }
    }
  }
};
setInterval(switchImage, 1000);
// function to saved values added to timeActivity object and shown in table
saveButton.onclick = function () {
  // add new item (activity, start time, end time) to timeActivity object
  timeActivity[selectedActivity.value] = [startTime.value, endTime.value];

  //add saved activity to table (with start time and end time)
  toDoList.innerHTML += `<tr>
  <th>${startTime.options[startTime.selectedIndex].text} - ${
    endTime.options[endTime.selectedIndex].text
  }</th>
  <th>${selectedActivity.value}</th>
  </tr>`;

  switchImage();
};

/////////////////////////////////////////////
// TO DO LIST

// what can i do in case of activity time conflict
// make free time image default
