
let b = document.querySelectorAll(".btns")
let l = document.querySelector(".left")

document.getElementById("pro").addEventListener("click",function (){
    document.getElementById("frm").src="profile.html"
})
document.getElementById("ord").addEventListener("click",function (){
    document.getElementById("frm").src="orders.html"
})
document.getElementById("lnc").addEventListener("click",function (){
    document.getElementById("frm").src="launches.html"
})
document.getElementById("set").addEventListener("click",function (){
    document.getElementById("frm").src="settings.html"
})

b.forEach((b1) => {
    b1.addEventListener("mouseover", function () {
        l.style.backgroundColor = "rgba(13, 147, 192, 1)";
    })
    b1.addEventListener("mouseleave", function () {
        l.style.backgroundColor = "rgb(9, 122, 160)";
    })
})






// let x = document.querySelector("#mail")
// let y = document.querySelector("pass")
// let pro = document.getElementById("pro")
// let ord = document.getElementById("ord")
// let lnc = document.getElementById("lnc")
// let set = document.getElementById("set")