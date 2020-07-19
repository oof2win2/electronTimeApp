//module of my code to make main.js cleaner

function runDate() {
  let hours, minutes, seconds;
  for (let hours = 0; hours < 24; hours++) {
    hours = updateHours();
    for(let minutes = 0; minutes < 60; minutes++) {
      minutes = updateMinutes();
      for(let seconds = 0; seconds < 60; seconds++) {
        seconds = updateSeconds();
        console.log("The current time is: " + hours + " " + minutes + " " + seconds); //for debug uses in the future, logs to console when running through npm start
        //console.log(seconds.length, seconds);
        sleep(20);
      }
    }
  }
}

//these three functions do exactly their description, they update the hours, minutes and seconds on the clock
function updateHours() {
  let now = new Date();
  let hours = String(now.getHours());
  return hours;
}
function updateMinutes() {
  let now = new Date();
  let minutes = String(now.getMinutes());
  return minutes;
}
function updateSeconds() {
  let now = new Date();
  let seconds = String(now.getSeconds());
  if (seconds.length == 1) {
    seconds = '0'+String(seconds);
  }
  return seconds;
}

//this function blocks any action until it finishes, basically making EVERYTHING wait for it to finish
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

//function for testing stuff, should not run in normal cycle
function test() {
  while (true) {
    let now = new Date;
    let milli = String(now.getTime());
    console.log(milli);
  }
}


export { runDate, test };
