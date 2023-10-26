"use strict";

document.addEventListener("keydown", (e) => {
  const sound = document.querySelector(`audio[data-key='${e.keyCode}']`);

  const keyEl = document.querySelector(`.key[data-key='${e.keyCode}']`);

  if (!sound) return;

  sound.currentTime = 0;

  sound.play();

  keyEl.classList.add("playing");
});

var removeTransition = function (e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
};

var keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
