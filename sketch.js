const bgColor = [220, 222, 224];

function setup() {
  createCanvas(innerWidth, innerHeight - 120);
  document.getElementById("algo").append(...getAlgoOptions());
  document.getElementById("delay").addEventListener("change", (e) => {
    var speed = e.target.value;
    select("#speedLabel").html("Speed : " + speed);
    setAnimationDelay(2000 / speed);
  });
  init();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 120);
  setBars();
  print("resized", windowWidth, windowHeight);
}
function draw() {
  background(bgColor);
  sDraw();
}
function getCurrentAlgo() {
  let algo = document.getElementById("algo").value;
  print(algo);
  return sortingAlgorithms[algo];
}
function setAnimationDelay(delay) {
  ANIMATION_DELAY = delay;
}
