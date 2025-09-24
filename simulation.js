let array = [];
let bars = [];
let ANIMATE = false;
let ANIMATION_DELAY = 200;
let ANIMATE_EVERY_n_FRAME = 100; //100 max
let BAR_SEPARATION = 3;
let itemsCount = 40;

/**
 * Initializes the simulation by generating an array of random numbers
 * and setting up the bars based on this array.
 * @function init
 */
function init(size = itemsCount) {
  array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.ceil(Math.random() * 50) + 10);
  }
  setBars();
}

//!Drawing

/**
 * Sets the bars array to the bars corresponding to the array elements.
 * @example
 * setBars();
 */
function setBars() {
  print("setBars");
  bars = getBars(array);
}

/**
 * Returns an array of Bar objects based on the input array.
 * Each Bar corresponds to one element in the input array.
 * The width of each Bar is calculated based on the number of elements in the input array
 * and the BAR_SEPARATION constant.
 * @param {number[]} array - The input array
 * @returns {Bar[]} - An array of Bar objects
 */
function getBars(array) {
  let bars = [];
  let barWidth = (width - BAR_SEPARATION * (array.length - 1)) / array.length;
  for (let i = 0; i < array.length; i++) {
    let val = array[i];
    bars.push(new Bar(i * (barWidth + BAR_SEPARATION), barWidth, val));
  }
  return bars;
}
//Current frame count
let frameCount = 0;

function sDraw() {
  if (ANIMATE && frameCount % ANIMATE_EVERY_n_FRAME === 0) {
  }
  bars.forEach((bar) => bar.draw());
  frameCount++;
}

//!Sorting API
function sort_list() {
  if (!select(".menu").hasClass("hide")) toggle_menu();
  getCurrentAlgo()(bars);
}

//!Functionality
async function new_list() {
  init(select("#size").value());
  break_flag = true;
  await sleep(ANIMATION_DELAY * 2.5);
  break_flag = false;
}
async function shuffle_list() {
  shuffle(array, true);
  setBars();
  break_flag = true;
  await sleep(ANIMATION_DELAY * 2.5);
  break_flag = false;
}
