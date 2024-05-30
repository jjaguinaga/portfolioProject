const box = document.querySelectorAll("div.longBox, div.smallBox");

const createShadow = box.forEach(function(box) {
   box.addEventListener("mouseover", function() {
      box.style.boxShadow = "4px 4px 10px purple";
   })
   box.addEventListener("mouseout", function() {
      box.style.boxShadow = "none";
   })
})

const hightlight = document.querySelectorAll("a.linkBox");

const makeBlur = hightlight.forEach(function(hightlight) {
   hightlight.addEventListener("mouseover", function() {
      hightlight.style.backdropFilter = "blur(3px)";
   })
   hightlight.addEventListener("mouseout", function() {
      hightlight.style.backdropFilter = "none";
   })
})