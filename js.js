var btn = document.getElementById("hero-what");
var m2 = document.getElementById("m2");
var toggle = document.getElementById("toggle");
var menu = document.getElementById("menu");
var ul = document.getElementById("ul");


btn.onclick = ()=>{
  m2.classList.toggle("none");
  
}


toggle.onclick = ()=>{
  menu.classList.toggle("menu-active");
  ul.style.flexDirection = "column";
  
}