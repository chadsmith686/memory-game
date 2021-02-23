const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let card1 = null;
let card2 = null;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);
  const color = event.target.className;
  event.target.style.backgroundColor = color;
  // card1 = color;
  // card2 = color;
    if (card1 === null) {
      console.log('card 1 was null');
      card1 = color;
      console.log('card 1: ', card1);
      console.log('card 2: ', card2);
      return;
    } 
    if (card2 === null) {
      console.log('card 2 was null');
      card2 = color;
      console.log('card 1: ', card1);
      console.log('card 2: ', card2);
      if (card1 === card2) {
        console.log('Match!')
        card1 = null;
        card2 = null;
      } else {
        console.log('Not a match!')
        setTimeout(function(){
          console.log('I RAN!')
          const card1El = document.getElementsByClassName(card1);
          const card2El = document.getElementsByClassName(card2);
          for (let el of card1El){
            el.style.backgroundColor = 'white';
          }
          for (let el of card2El) {
            el.style.backgroundColor = 'white';
          }
          card1 = null;
          card2 = null;
        }, 300);

      }
      return;
    }
    console.log('neither card was null.');

  // card1.addEventListener("click", color);
  // card2.addEventListener("click", color);
    // if (card1(color) === card2(color)) {
    //   card1 = color;
    //   card2 = color;
    // } else {
    //   card1 = null;
    //   card2 = null;
    // }
}

// when the DOM loads
createDivsForColors(shuffledColors);