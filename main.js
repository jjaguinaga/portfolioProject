const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
  
} else  {
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

  var popupLink = document.getElementById("popup-link");
  var popupWindow = document.getElementById("popup-window");
  var closeButton = document.getElementById("close-button");
  // Show the pop-up window when the link is clicked
  popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
  });
  // Hide the pop-up window when the close button is clicked
  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
  });
}
