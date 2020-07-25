//these three functions do exactly their description, they update the hours, minutes and seconds on the clock
function updateHours(flash) {
  let now = new Date();
  let hours = String(now.getHours());
  if (hours.length == 1) {
    hours = '0'+hours;
  }
  if (flash) {
    hours = hours + ' : ';
  }
  else {
    hours = hours + '   ';
  }
  return hours;
}
function updateMinutes(flash) {
  let now = new Date();
  let minutes = String(now.getMinutes());
  if (minutes.length == 1) {
    minutes = '0'+minutes;
  }
  if (flash) {
    minutes = minutes + ' : ';
  }
  else {
    minutes = minutes + '   ';
  }
  return minutes;
}
function updateSeconds() {
  let now = new Date();
  let seconds = String(now.getSeconds());
  if (seconds.length == 1) {
    seconds = '0'+seconds;
  }
  return seconds;
}

//function for testing stuff, should not run in normal cycle
function test() {
  while (true) {
    let now = new Date;
    let milli = String(now.getTime());
    console.log(milli);
  }
}

function update() {
  let secs = updateSeconds();
  let flash = secs % 2;
  document.getElementById("hrs").innerHTML = updateHours(flash);
  document.getElementById("mins").innerHTML = updateMinutes(flash);
  document.getElementById("secs").innerHTML = updateSeconds();
}

function run() {
  setInterval(update, 200);
}

run();
