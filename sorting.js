let break_flag = false;
const algorithms = [
  "Merge Sort",
  "Quick Sort",
  "Bubble Sort",
  "OPT Bubble Sort",
  "Insertion Sort",
  "Selection Sort",
];

const sortingAlgorithms = {
  "Bubble Sort": bubbleSort,
  "OPT Bubble Sort": optBubbleSort,
  "Insertion Sort": insertionSort,
  "Selection Sort": selectionSort,
  "Merge Sort": mergeSort,
  "Quick Sort": quickSort,
};

async function bubbleSort(bars) {
  print("bubble sort called");

  for (let i = 0; i < bars.length; i++) {
    for (let j = 0; j < bars.length - 1; j++) {
      if (break_flag) return; //preemption
      await sleep(ANIMATION_DELAY);
      if (bars[j].getValue() > bars[j + 1].getValue()) {
        await swap(bars, j, j + 1);
      }
    }
  }
}
async function optBubbleSort(bars) {
  print("OPT bubble sort called");

  for (let i = 0; i < bars.length; i++) {
    let flag = false;
    for (let j = 0; j < bars.length - i - 1; j++) {
      if (break_flag) return; //preemption
      await sleep(ANIMATION_DELAY);
      if (bars[j].getValue() > bars[j + 1].getValue()) {
        await swap(bars, j, j + 1);
        flag = true;
      }
    }
    if (!flag) break;
  }
}
async function insertionSort(bars) {
  print("insertion sort called");

  for (let i = 1; i < bars.length; i++) {
    let temp = bars[i].getValue(INSERTION);
    let j = i - 1;
    await sleep(ANIMATION_DELAY * 2);
    while (j >= 0 && bars[j].getValue() > temp) {
      if (break_flag) return; //preemption
      await swap(bars, j, j + 1);
      j--;
    }
    bars[j + 1].setValue(temp);
  }
}

async function selectionSort(bars) {
  print("selection sort called");

  for (let i = 0; i < bars.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < bars.length; j++) {
      if (break_flag) return; //preemption
      await sleep(ANIMATION_DELAY);
      if (bars[j].getValue() < bars[minIndex].getValue()) {
        minIndex = j;
      }
      bars[minIndex].setState(SELECTION);
    }
    await swap(bars, i, minIndex);
  }
}
async function mergeSort(bars) {
  print("merge sort called");
  if (break_flag) return;
  if (bars.length <= 1) return;

  let left = 0;
  let right = bars.length - 1;
  let mid = Math.floor((left + right) / 2);

  await sleep(ANIMATION_DELAY);
  bars[mid].setState(MERGE);
  if (!beep.isPlaying() && isAudioEnabled) beep.play();
  let leftBars = bars.slice(left, mid + 1);
  let rightBars = bars.slice(mid + 1, right + 1);

  await mergeSort(leftBars);
  await mergeSort(rightBars);

  await merge(
    bars,
    leftBars.map((bar) => bar.copy()),
    rightBars.map((bar) => bar.copy())
  );
  bars[mid].setState(IDLE);
}

async function merge(bars, leftBars, rightBars) {
  let leftIndex = 0;
  let rightIndex = 0;
  let index = 0;

  while (leftIndex < leftBars.length && rightIndex < rightBars.length) {
    if (break_flag) return;
    if (leftBars[leftIndex].getValue() < rightBars[rightIndex].getValue()) {
      await assign(bars, leftBars, index, leftIndex);
      leftIndex++;
    } else {
      await assign(bars, rightBars, index, rightIndex);
      rightIndex++;
    }
    index++;
  }
  while (leftIndex < leftBars.length) {
    if (break_flag) return;
    await assign(bars, leftBars, index, leftIndex);
    leftIndex++;
    index++;
  }
  while (rightIndex < rightBars.length) {
    if (break_flag) return;
    await assign(bars, rightBars, index, rightIndex);
    rightIndex++;
    index++;
  }
}
async function quickSort(bars) {
  print("quick sort called");
  quickSortHelper(bars, 0, bars.length - 1);
}
async function quickSortHelper(bars, start, end) {
  if (start < end) {
    let pivotIndex = await partition(bars, start, end);

    await quickSortHelper(bars, start, pivotIndex - 1);
    await quickSortHelper(bars, pivotIndex + 1, end);
  }
}
async function partition(bars, start, end) {
  let pivot = bars[end].getValue(QUICK, true);
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (break_flag) return;
    await sleep(ANIMATION_DELAY);

    if (bars[i].getValue() < pivot) {
      await swap(bars, i, pivotIndex);
      pivotIndex++;
    }
  }
  await swap(bars, pivotIndex, end);
  bars[end].setState(IDLE);
  return pivotIndex;
}
//Helpers
async function swap(bars, i, j) {
  if (break_flag) return;
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
async function assign(bars, bars2, i, j) {
  if (break_flag) return;
  bars[i].setState(SWAPPING);
  await sleep(ANIMATION_DELAY);
  if (!cling.isPlaying() && isAudioEnabled) {
    cling.play();
  }
  bars[i].setValue(bars2[j].getValue());

  bars[i].setState(IDLE);
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
