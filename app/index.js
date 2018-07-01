import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
const pusheen = document.getElementById("pusheen");

let curFrame = 1;
let frameCount = 4;

setInterval(function(){ 
  if (curFrame < frameCount) {
    curFrame++;
  } else {
    curFrame = 1;
  }
  
  pusheen.href = "frame" + curFrame + ".png"; 
}, 150);

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
}
