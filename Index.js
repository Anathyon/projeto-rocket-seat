"use strict"
let alt_modo=document.querySelector("#alternar_modo")
const html=document.documentElement
const img=document.querySelector("#perfil")

alt_modo=addEventListener("click",()=>{
    html.classList.toggle("claro")
    if (html.classList.contains("claro")) {
        img.setAttribute("src","avatar-c.png")
    }else{
        img.setAttribute("src","avatar-e.png")
    }
})















