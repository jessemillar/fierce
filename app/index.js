import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import { today } from "user-activity";
import { display } from "display";
import * as utils from "../common/utils";
import * as fontPlease from "../resources/fonts/please/please-data.json";
import * as fontPleaseSmall from "../resources/fonts/please-small/please-small-data.json";
import * as print from "../common/print";

// Update the clock every minute
clock.granularity = "minutes";

const pusheen = document.getElementById("pusheen");
const frameCount = 4;
let curFrame = 1;

const timeCharacters = [
  document.getElementById("time1"), 
  document.getElementById("time2"), 
  document.getElementById("time3"), 
  document.getElementById("time4"), 
  document.getElementById("time5"), 
  document.getElementById("time6"), 
  document.getElementById("time7")
];

const dateCharacters = [
  document.getElementById("date1"), 
  document.getElementById("date2"), 
  document.getElementById("date3"), 
  document.getElementById("date4"), 
  document.getElementById("date5"), 
  document.getElementById("date6"), 
  document.getElementById("date7"),
  document.getElementById("date8"),
  document.getElementById("date9"),
  document.getElementById("date10"),
  document.getElementById("date11"),
  document.getElementById("date12"),
  document.getElementById("date13"),
  document.getElementById("date14"),
];

const animations = [
  "blanket",
  "computer",
  "cupid",
  "detective",
  "dino",
  "fierce",
  "ice-cream",
  "nap",
  "shades",
  "pizza"
];
let curAnimation = utils.random(animations);

// The animation loop
setInterval(function(){
  if (curFrame < frameCount) {
    curFrame++;
  } else {
    curFrame = 1;
  }
  
  pusheen.href = "animations/"+curAnimation+"/frame"+curFrame+".png";
}, 165);

// Change the animation when you look away
display.addEventListener("change", function() {
  if (!display.on) {
    curAnimation = utils.random(animations);
  }
});

clock.ontick = (evt) => {
  let steps = today.adjusted.steps;
  let date = evt.date;
  let weekday = date.getDay();
  let month = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  let mins = utils.zeroPad(date.getMinutes());

  let period = "am";
  if (hours >= 12) {
    period = "pm";
  }
  
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = utils.zeroPad(hours);
  }
  
  print.font(150, 216, hours+":"+mins+" "+period, fontPlease, timeCharacters, "center");
  print.font(150, 269, +month+"-"+day+" "+utils.weekday(weekday).substring(0,3)+" "+steps, fontPleaseSmall, dateCharacters, "center"); 
}
