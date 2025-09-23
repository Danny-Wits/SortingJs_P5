# 🎨 Sorting Algorithm Visualizer

An interactive **sorting algorithm simulator** built with [p5.js](https://p5js.org/).  
This project visualizes how different sorting algorithms work, step by step, with smooth animations and optional sound effects.

---

## 🚀 Features

- ✅ **Bubble Sort** (implemented)
- ✅ **Insertion Sort** (implemented)
- 🔜 More algorithms coming soon (Selection Sort, Merge Sort, Quick Sort, Heap Sort, Radix Sort, etc.)
- 🎵 Audio feedback (toggle on/off)
- 🎛 Adjustable **array size** and **speed**
- 🔀 Generate new or shuffled arrays anytime

---

## 📂 Project Structure

```

.
├── libraries/
│   ├── audio.js       # Sound utilities
│   ├── bar.js         # Bar (array element) class
│   ├── beep.wav       # Audio effect
│   ├── cling.m4a      # Audio effect
│   ├── cling.mp3      # Audio effect
├── index.html         # Main HTML entry
├── jsconfig.json      # Project JS config
├── readme.md          # Documentation
├── simulation.js      # Core simulation logic
├── sketch.js          # p5.js sketch (main loop)
├── sorting.js         # Sorting algorithms
├── style.css          # UI styling

```

---

## 🌐 Live Demo

👉 [**View Live Project**](https://your-live-link-here.com)

---

## 🛠 Installation & Usage

1. Clone the repository:

   ```bash
   git clone https://github.com//sorting-visualizer.git
   cd sorting-visualizer
   ```

2. Open `index.html` in a browser.
   _(Or use a local server like `live-server` for smoother experience.)_

---

## 🎮 How to Use

- Select a sorting algorithm from the dropdown.
- Adjust **size** (number of bars) and **speed** (animation delay).
- Click **New List** to generate a fresh random list.
- Click **Shuffle** to randomize the current list.
- Press **Sort** to start the visualization.
- Toggle audio for sound effects during sorting.

---

## 📸 Preview

![App Screenshot](./preview.png)


## 🤝 Contributing

Contributions are welcome! If you’d like to add new algorithms or improve animations:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/algorithm-name`)
3. Commit your changes
4. Open a pull request

---

## 📜 License

MIT License © 2025 @DannyWits

---

### ✨ Future Plans

- Implement more sorting algorithms
- Add dark/light mode
- Performance metrics display (comparisons & swaps counter)
- Mobile responsive version
