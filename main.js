document.getElementById("service").onmouseover = function() {mouseOver()};
document.getElementById("service").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("service").style.color = "green";
}

function mouseOut() {
  document.getElementById("service").style.color = "red";
}
document.getElementById("products").onclick = function() {
  
    document.getElementById("content1").slide="flex";
}

document.getElementById("content2").onclick = function() {
  
    document.getElementById("content2").style.display="flex";

}
document.getElementById("content3").onclick = function() {
  
    document.getElementById("content3").style.display="flex";

}
document.getElementById("content4").onclick = function() {
  
    document.getElementById("content4").style.display="flex";

}
document.getElementById("rounded").onclick = function() {

    document.getElementById("rounded").style.display = "text";

}

document.getElementById("square").onclick = function() {

    document.getElementById("square").style.display = "none";

}
$(document).ready(function(){
    $("#products").hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
    });
  });
