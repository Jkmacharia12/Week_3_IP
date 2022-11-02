$(document).ready(function () {
  $("#productImage").click(function () {
    $("#content").slideToggle("slow");
  });
});
$(document).ready(function () {
  $("#productImage1").click(function () {
    $("#content1").slideToggle("slow");
  });
});
$(document).ready(function () {
  $("#productImage2").click(function () {
    $("#content2").slideToggle("slow");
  });
});
$(document).ready(function () {
  $("#productImage3").click(function () {
    $("#content3").slideToggle("slow");
  });
});
document.getElementById("service").onmouseover = function () {
  mouseOver();
};
document.getElementById("service").onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  document.getElementById("service").style.color = "green";
}

function mouseOut() {
  document.getElementById("service").style.color = "red";
}
$(document).ready(function () {
  $("form#contact-form").submit(function (event) {
    var name = $("input#name").val();
    var email = $("input#email").val();
    var subject = $("subject1#subject").val();
    var message = $("textarea#message").val();
    if ($("input#name").val() && $("input#email").val()) {
      alert(
        name +
          ", we have received your message. Thank you for reaching out to us."
      );
    } else {
      alert("Please enter your name and email!");
    }
  });
});
