var elem1 = document.querySelector("#elem1")
var img = document.querySelector("#elem1 img")

elem1.addEventListener("mousemove", function(dets) {
    img.style.opacity = 1
img.style.left = dets.x + "px"
img.style.top = dets.y + "px"

   } )
   elem1.addEventListener("mouseleave", function(dets) {

    img.style.opacity = 0
   })