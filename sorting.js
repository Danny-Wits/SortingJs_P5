const algorithms = [
  "Bubble Sort",
  "Insertion Sort",
  "Selection Sort",
  "Merge Sort",
  "Quick Sort",
];

const sortingAlgorithms = {
  "Bubble Sort": bubbleSort,
  "Insertion Sort": insertionSort,
  "Selection Sort": selectionSort,
  "Merge Sort": mergeSort,
  "Quick Sort": quickSort,
};

async function bubbleSort(bars) {
  print("bubble sort called");

  for (let i = 0; i < bars.length; i++) {
    for (let j = 0; j < bars.length - 1; j++) {
      await sleep(ANIMATION_DELAY);
      if (bars[j].getValue() > bars[j + 1].getValue()) {
        await swap(bars, j, j + 1);
      }
    }
  }
}
async function insertionSort(bars) {
  print("insertion sort called");

  for (let i = 1; i < bars.length; i++) {
    let temp = bars[i].getValue(INSERTION);
    let j = i - 1;
    await sleep(ANIMATION_DELAY * 3);
    while (j >= 0 && bars[j].getValue() > temp) {
      await swap(bars, j, j + 1);
      j--;
    }
    bars[j + 1].setValue(temp);
  }
}
function selectionSort() {}
function mergeSort() {}
function quickSort() {}

//Helpers
async function swap(bars, i, j) {
  print("swap");
  bars[i].setState(SWAPPING);
  bars[j].setState(SWAPPING);
  await sleep(ANIMATION_DELAY);
  let temp = bars[i].value;
  bars[i].setValue(bars[j].value);
  bars[j].setValue(temp);
  if (!cling.isPlaying() && isAudioEnabled) {
    cling.play();
  }
  bars[i].setState(IDLE);
  bars[j].setState(IDLE);
}

function getAlgoOptions() {
  let options = [];
  for (let i = 0; i < algorithms.length; i++) {
    options.push(createOption(algorithms[i]));
  }
  return options;
}
function createOption(value) {
  let option = document.createElement("option");
  option.value = value;
  option.text = value;
  return option;
}
function sleep(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec));
}
