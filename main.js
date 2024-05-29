const box = document.querySelectorAll("div.longBox, div.smallBox");

box.forEach(function(box) {
  box.addEventListener("mouseover", function() {
    box.style.boxShadow = "4px 4px 10px purple";
  })
  box.addEventListener("mouseout", function() {
    box.style.boxShadow = "none";
  })
})