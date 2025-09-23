const IDLE = 0;
const ACCESS = 1;
const SWAPPING = 2;
const INSERTION = 3;
const HEIGHT_MULTIPLIER = 10;
const bar_states_colors = {
  0: "black",
  1: "green",
  2: "red",
  3: "blue",
};

class Bar {
  constructor(x, w, value) {
    this.x = x;
    this.y = height - value * HEIGHT_MULTIPLIER;
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
    rect(this.x, this.y, this.w, this.h);
    fill("white");
    textAlign(CENTER, BOTTOM);
    textSize(this.w / 2);
    text(this.value, this.x + this.w / 2, this.y + this.h);
  }
  setState(state) {
    this.state = state;
  }
  getValue(state = ACCESS) {
    this.state = state;
    if (!beep.isPlaying() && isAudioEnabled) {
      beep.play();
    }
    setTimeout(
      () => (this.state = IDLE),
      ANIMATION_DELAY * (state === INSERTION ? 3 : 1)
    );
    return this.value;
  }
  setValue(value) {
    this.value = value;
    this.h = value * HEIGHT_MULTIPLIER;
    this.y = height - value * HEIGHT_MULTIPLIER;
  }
}
