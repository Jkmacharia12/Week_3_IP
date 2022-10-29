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
    $("form#contact-form").submit(function(event){
      // event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var subject=$("input#subject").val();
      var message = $("textarea#message").val();
      if ($("input#name").val() && $("input#email").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });

