// Write your code in this file!
function scuberGreetingForFeet(givenValue){
  let totalPrice;
  if (givenValue > 2500){
    totalPrice =  "No can do."
  } else if(givenValue > 400 && givenValue <= 2500){
    totalPrice = "I will gladly take your thirty bucks."
  }else {
    totalPrice = "This one is on me!"
  }
  return totalPrice
}

function ternaryCheckCity(givenValue){
  let response;
   givenValue === "NYC" ? response = "Ok, sounds good." : response = "No go.";
  return response;
}

function switchOnCharmFromTip(givenValue){
  let response;

  switch(givenValue){
    case "generous":
      response = "Thank you so much.";
      break;

    case "not as generous":
      response = "Thank you.";
      break;

    default:
      response = "Bye.";
      break;
  }
    return response
}
