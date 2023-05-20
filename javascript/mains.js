function changeText() {
  document.querySelector("p").innerHTML = "Kyoto!";
}

function increaseImageSize() {
  var img = document.getElementById("myImage");
  var currWidth = img.clientWidth;
  img.style.width = currWidth + 50 + "px";
}

function decreaseImageSize() {
  var img = document.getElementById("myImage");
  var currWidth = img.clientWidth;
  img.style.width = currWidth - 50 + "px";
}

function resetImageSize() {
  var img = document.getElementById("myImage");
  img.style.width = "";
}
