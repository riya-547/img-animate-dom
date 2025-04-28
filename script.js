var elem = document.querySelectorAll(".elem")

elem.forEach(function (e){
    e.addEventListener("mousemove", function(dets){
       e.childNodes[3].style.left = dets.x+"px"
    })
    e.addEventListener("mouseenter", function(){
        e.childNodes[3].style.opacity = 1
     })
     e.addEventListener("mouseleave", function(){
        e.childNodes[3].style.opacity = 0
     })
})