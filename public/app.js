const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

const toTop=document.querySelector(".totop");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>500){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

const auctionLink=document.getElementById("auctionlink");


const message=document.getElementById("messages");

message.addEventListener("click",()=>{
   window.open("message.html","_self");
})


const place=document.getElementById("addr2")
place.innerHTML="Chennai"


const preload= document.getElementById("preload");

setTimeout(()=>{
    preload.style.display="none";
},2000);