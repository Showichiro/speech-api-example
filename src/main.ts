const text = document.querySelector<HTMLTextAreaElement>("textarea");
const speakbutton = document.querySelector<HTMLButtonElement>("button#speak-button");
const cancelbutton = document.querySelector<HTMLButtonElement>("button#cancel-button");
const pausebutton = document.querySelector<HTMLButtonElement>("button#pause-button");
const resumebutton = document.querySelector<HTMLButtonElement>("button#resume-button");

speakbutton?.addEventListener("click", function () {
  const uttr = new SpeechSynthesisUtterance(text?.value);
  uttr.lang = "ja-JP";
  speechSynthesis.speak(uttr);
});
cancelbutton?.addEventListener("click", function () {
  speechSynthesis.cancel();
});
pausebutton?.addEventListener("click", function () {
  speechSynthesis.pause();
});
resumebutton?.addEventListener("click", function () {
  speechSynthesis.resume();
});
