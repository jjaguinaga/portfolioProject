const box = document.querySelectorAll("div.longBox, div.smallBox");

box.forEach(function(box) {
  box.addEventListener("mouseover", function() {
    box.style.boxShadow = "4px 4px 10px purple";
  })
  box.addEventListener("mouseout", function() {
    box.style.boxShadow = "none";
  })
})

const hightlight = document.querySelectorAll("div.spacePic");

hightlight.forEach(function(hightlight) {
    hightlight.addEventListener("mouseover", function() {
        hightlight.style.filter = "blur(2px)";
    })
    hightlight.addEventListener("mouseout", function() {
        hightlight.style.filter = "none";
    })
})