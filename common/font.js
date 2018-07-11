export function print(x, y, message, characters, elements, align = "left") {
  let cursorX = x;
  let cursorY = y;
  
  // Hide all elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.visibility = "hidden";
  }
  
  if (align != "left") {
    let width = 0;
    
    for (var i = 0; i < message.length; i++) {
      let char = translate(message[i]);
      width += characters[char].width;
    }
    
    if (align == "center") {
      cursorX -= width / 2;
    } else if (align == "right") {
      cursorX = x - width;
    }
  }
  
  for (var i = 0; i < message.length; i++) {
    let char = translate(message[i]);
        
    elements[i].x = cursorX;
    elements[i].y = cursorY;
    elements[i].width = characters[char].width;
    elements[i].height = characters[char].height;
    elements[i].href = characters[char].href;
    elements[i].style.visibility = "visible";
    
    cursorX += characters[char].width;
  }
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
    case ":":
      return "colon";
    case "-":
      return "dash";
    default:
      return character;
  }
}