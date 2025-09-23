let beep, cling; //Audio files
function preload() {
  beep = loadSound("./beep.wav");
  cling = loadSound("./cling.m4a");
  beep.setVolume(0.2);
  cling.setVolume(0.2);
}
let isAudioEnabled = false;
function toggle_audio() {
  isAudioEnabled = !isAudioEnabled;
}
