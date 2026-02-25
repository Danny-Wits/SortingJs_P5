const IDLE = 0;
const ACCESS = 1;
const SWAPPING = 2;
const INSERTION = 3;
const SELECTION = 4;
const MERGE = 5;
const QUICK = 6;
let isCircleMode = true;
const HEIGHT_MULTIPLIER = 10;
const bar_states_colors = {
  0: "gray",
  1: "#92F294",
  2: "#FF99A9",
  3: "#5cdd65",
  4: "#fbc000",
  5: "#fbe288",
  6: "red",
};

class Bar {
  constructor(x, w, value) {
    this.x = x;
    this.y = height - value * HEIGHT_MULTIPLIER;
    this.yOffset = 0;
    this.w = w;
    this.value = value;
    this.h = value * HEIGHT_MULTIPLIER;
    this.state = IDLE;
  }

  /**
   * Draws the bar according to its current state.
   * The bar is drawn in black if it is in the idle state, and in red if it is in the swapping state.
   */
  draw() {
    noStroke();
    fill(bar_states_colors[this.state]);
    if (typeof isCircleMode !== "undefined" && isCircleMode) {
      // CIRCLE MODE
      let cx = this.x + this.w / 2;
      let cy = height / 2 + this.yOffset;
      let amt = map(this.value, 10, 60, 0, 1);

      let lightBlue = color("#a5d8ff");
      let darkBlue = color("#1864ab");

      if (this.state === IDLE) {
        fill(lerpColor(lightBlue, darkBlue, amt));
      }
      circle(cx, cy, this.w);
      fill("white");
      textAlign(CENTER, CENTER);
      textSize(this.w / 2.5);
      text(this.value, cx, cy);
    } else {
      rect(this.x, this.y, this.w, this.h);
      fill("white");
      textAlign(CENTER, BOTTOM);
      textSize(this.w / 2);
      text(this.value, this.x + this.w / 2, this.y + this.h);
    }
  }
  setState(state) {
    this.state = state;
  }
  getValue(state = ACCESS, without_Timeout = false) {
    this.state = state;
    if (!beep.isPlaying() && isAudioEnabled) {
      beep.play();
    }
    if (!without_Timeout) {
      setTimeout(
        () => (this.state = IDLE),
        ANIMATION_DELAY * (state === INSERTION ? 2 : 1),
      );
    }
    return this.value;
  }
  setValue(value) {
    this.value = value;
    this.h = value * HEIGHT_MULTIPLIER;
    this.y = height - value * HEIGHT_MULTIPLIER;
  }
  copy() {
    return new Bar(this.x, this.w, this.value);
  }
}
function toggle_circle_mode() {
  isCircleMode = !isCircleMode;
}
