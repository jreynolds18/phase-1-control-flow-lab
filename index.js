let numberOfFeet = 199;

function scuberGreetingForFeet(numberOfFeet){
  if (numberOfFeet < 400) {
    return 'This one is on me!';
  } else if (numberOfFeet >= 400) {
    if (numberOfFeet <= 2000) {
      return 'That will be twenty bucks.';
    }
  }

  if (numberOfFeet >= 2001 && numberOfFeet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  
  if (numberOfFeet >= 2501) {
    return 'No can do.'
  }
}

let city = 'NYC';
let cityMessage;

function ternaryCheckCity(city){
  cityMessage = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return cityMessage;
}

let tipSize;
function switchOnCharmFromTip(tipSize) {
  switch (tipSize) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}