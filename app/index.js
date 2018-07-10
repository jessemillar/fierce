import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import * as font from "../common/font";

// Update the clock every minute
clock.granularity = "minutes";

const pusheen = document.getElementById("pusheen");
const frameCount = 4;
let curFrame = 1;

let timeDigits = ["time1", "time2", "time3", "time4", "time5", "time6"];

// The animation loop
setInterval(function(){ 
  if (curFrame < frameCount) {
    curFrame++;
  } else {
    curFrame = 1;
  }
  
  pusheen.href = "frame" + curFrame + ".png";
  
  font.print(10, 10, "123", timeDigits);
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
}
