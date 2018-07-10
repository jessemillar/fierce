import * as characters from "../common/font-data.json";

export function print(x, y, message, elements) {
  let cursorX = x;
  let cursorY = y;
  
  for (var i = 0; i < message.length; i++) {
    let char = translate(message[i]);
    
    console.log(characters[char].width);
    
    elements[i].x = cursorX;
    elements[i].y = cursorY;
    elements[i].width = characters[char].width;
    elements[i].height = characters[char].height;
    
    cursorX += characters[char].width;
  }
  
  // console.log(characters.pm.width);
}

function translate(character) {  
  switch(character) {
    case "0":
      return "zero";
    case "1":
      return "one";
    case "2":
      return "two";
    case "3":
      return "three";
    case "4":
      return "four";
    case "5":
      return "five";
    case "6":
      return "six";
    case "7":
      return "seven";
    case "8":
      return "eight";
    case "9":
      return "nine";
    default:
      return character;
  }
}