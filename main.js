document.getElementById("service").onmouseover = function() {mouseOver()};
document.getElementById("service").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("service").style.color = "green";
}

function mouseOut() {
  document.getElementById("service").style.color = "red";
}