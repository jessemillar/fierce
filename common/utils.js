// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function drawDate(dateDigits, month, day) {
  let date = (month += 1) + "-" + day;
  
  for (var i = 0; i < date.length; i++) {    
    if (date[i] == "-") {
      setSmallDigitValue(dateDigits[i], "Dash");
    } else {
      setSmallDigitValue(dateDigits[i], date[i]);
    }
  }
  
  for (var i = date.length; i < dateDigits.length; i++) {    
    dateDigits[i].style.display = "none";
  }
}

// TODO This is gross and could be better
export function drawSteps(stepDigits, steps) {
  let steps = ("$" + steps);
  var curDigit = stepDigits.length - 1;
        
  for (var i = steps.length - 1; i >= 0; i--) {
    if (steps[i] == "$") {
      setSmallDigitValue(stepDigits[curDigit], "Dollar");
    } else {
      setSmallDigitValue(stepDigits[curDigit], steps[i]);
    }
    
    curDigit--;
  }
  
  while (curDigit >= 0) {
    stepDigits[curDigit].style.visibility = "hidden";
    curDigit--;
  }
}

export function setDigitPosition(digit, pos) {
  digit.x = pos.x;
  digit.y = pos.y;
}

export function setSmallDigitValue(digit, val) {
  digit.image = `small-${val}.png`;
  digit.style.visibility = "visible";
}

export function setLargeDigitValue(digit, val) {
  digit.image = `large-${val}.png`;
  digit.style.visibility = "visible";
}

export function setDayValue(day, val) {
  switch(val) {
    case 0:
      day.image = `small-Sun.png`;
      break;
    case 1:
      day.image = `small-Mon.png`;
      break;
    case 2:
      day.image = `small-Tue.png`;
      break;
    case 3:
      day.image = `small-Wed.png`;
      break;
    case 4:
      day.image = `small-Thu.png`;
      break;
    case 5:
      day.image = `small-Fri.png`;
      break;
    case 6:
      day.image = `small-Sat.png`;
      break;
  }
}