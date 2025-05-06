const introText = document.getElementById("intro-text");
const introLines = [
  "Welcome to Qadeer Website",
  "Welcome to Qadeer Hacking Zone"
];

let lineIndex = 0;

function showIntroText() {
  if (lineIndex < introLines.length) {
    introText.innerText = introLines[lineIndex];
    lineIndex++;
    setTimeout(showIntroText, 2500);
  } else {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".main-content").style.display = "block";
  }
}

window.onload = showIntroText;
