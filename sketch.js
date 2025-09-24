const bgColor = [255, 255, 255];

function setup() {
  createCanvas(windowWidth, windowHeight);

  document.getElementById("algo").append(...getAlgoOptions());

  document.getElementById("delay").addEventListener("input", (e) => {
    var speed = e.target.value;
    select("#speedLabel").html("Speed : " + speed);
    setAnimationDelay(speed == 100 ? 0 : 2000 / speed);
  });
  init();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setBars();
  print("resized", windowWidth, windowHeight);
}
function draw() {
  background(bgColor);
  drawGrid(width / itemsCount);
  sDraw();
}
function drawGrid(density = 100) {
  stroke(200, 100);
  strokeWeight(1);
  for (let i = 0; i < width; i += density) {
    line(i, 0, i, height);
  }
  for (let i = 0; i < height; i += density) {
    line(0, i, width, i);
  }
}
function getCurrentAlgo() {
  let algo = document.getElementById("algo").value;
  print(algo);
  return sortingAlgorithms[algo];
}
function setAnimationDelay(delay) {
  ANIMATION_DELAY = delay;
}
function toggle_menu() {
  select(".menu").toggleClass("hide");
  select(".title").toggleClass("hide");
}
async function stop_sort() {
  break_flag = true;
  await sleep(ANIMATION_DELAY * 2.5);
  break_flag = false;
}
