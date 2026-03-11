// let box = document.querySelector(".box")
// window.addEventListener("mousemove",function(e){
//     box.style.top = e.clientY + "px";
//     box.style.left = e.clientX + "px";
// })

let ul = document.querySelector("ul")
ul.addEventListener("click",function(e){
    e.target.classList.toggle("lt")
})