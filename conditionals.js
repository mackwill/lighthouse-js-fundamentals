const raining = true;
const cold = false;
const temperature = 12;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

console.log("-------");

if (temperature < 0) {
  console.log("Make sure you pick ou a scarf!");
} else if (temperature < 15) {
  console.log("Short sleees won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
