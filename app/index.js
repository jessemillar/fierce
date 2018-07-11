import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import * as characters from "../resources/font-data.json";
import * as font from "../common/font";

// Update the clock every minute
clock.granularity = "minutes";

const pusheen = document.getElementById("pusheen");
const frameCount = 4;
let curFrame = 1;

let timeDigits = [
  document.getElementById("time1"), 
  document.getElementById("time2"), 
  document.getElementById("time3"), 
  document.getElementById("time4"), 
  document.getElementById("time5"), 
  document.getElementById("time6"), 
  document.getElementById("time7")
];

// The animation loop
setInterval(function(){ 
  if (curFrame < frameCount) {
    curFrame++;
  } else {
    curFrame = 1;
  }
  
  pusheen.href = "frame" + curFrame + ".png";
}, 150);

clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let mins = util.zeroPad(today.getMinutes());

  let period = "am";
  if (hours>=12) {
    period = "pm";
  }
  
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  
  font.print(150, 235, hours+":"+mins+period, characters, timeDigits, "center");
}
