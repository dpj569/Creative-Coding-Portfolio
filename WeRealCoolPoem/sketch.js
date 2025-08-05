let poem = [
  "The Pool Players.",
  "Seven at the Golden Shovel.",
  "We real cool. We",
  "Left school. We",
  "Lurk late. We",
  "Strike straight. We",
  "Sing sin. We",
  "Thin gin. We",
  "Jazz June. We",
  "Die soon.",
  "We Real Cool, By Gwendolyn Brooks"
];

let revealed = [];
let revealInterval = 120; // Seconds between each line reveal
let fadeSpeed = 4;        // Sets the fade in Speed

function setup() {
  createCanvas(600, 400); //Sets canvas size
  textSize(32); // Sets text size
  textAlign(CENTER, CENTER); //Centres the text Horizontally and       Vertically
  //Initialize the revealed array with each line and starting alpha   of 0
  for (let line of poem) {
    revealed.push({ line, alpha: 0 });
  }
}

function draw() {
  background(20); //Sets a dark background for contrast
  // Calculate vertical spacing between lines
  let spacing = height / (poem.length + 1);
  
  //Loop through each line and reveal it based on frame count
  for (let i = 0; i < revealed.length; i++) {
    //Check if it's time to reveal this line
    if (frameCount > i * revealInterval) {
      //Gradually increase alpha to create fade-in effect
      revealed[i].alpha = min(revealed[i].alpha + fadeSpeed, 255);
      //Set fill color with current alpha and draw the line
      fill(255, revealed[i].alpha); 
      text(revealed[i].line, width / 2, spacing * (i + 1));
    }
  }
}