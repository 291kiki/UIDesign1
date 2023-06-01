document.addEventListener("DOMContentLoaded", function() {
  var shape = document.getElementById("shape");

  setInterval(function() {
    shape.style.animation = "shrink 25s infinite";
  }, 25000); // 25 seconds
});
