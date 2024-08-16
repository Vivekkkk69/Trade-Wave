const home =document.getElementById("logo");

home.addEventListener("click",()=>{
    window.open("index.html","_self");
})


const preload= document.getElementById("preload");

setTimeout(()=>{
    preload.style.display="none";
},2000);