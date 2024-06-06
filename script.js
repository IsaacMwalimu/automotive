// document.getElementById("third_a").addEventListener("click", ()=>{
//     let x = document.querySelector("#third");
//     location=x
// })
let Start = document.querySelector(".start");
let Second = document.querySelector(".second");
let third = document.querySelector(".third");
let fourth = document.querySelector(".forth");

let startId=document.getElementById("start");
let secondId=document.getElementById("second");
let thirdId=document.getElementById("third");
let fourthId=document.getElementById("product_tyres");
let productsContainer=document.getElementById("products_container")


function onloadExe (){
    startId.classList.add("active");
    secondId.classList.remove("active");
    thirdId.classList.remove("active");
    Start.classList.add("active");
    Second.classList.remove("active");
    third.classList.remove("active");
    fourthId.classList.remove("active");
    fourth.classList.remove("active")
    productsContainer.style.transition=".4s"


}

Second.addEventListener("click", ()=>{
    secondId.classList.add("active");
    startId.classList.remove("active");
    thirdId.classList.remove("active");
    Second.classList.add("active");
    Start.classList.remove("active");    productsContainer.style.transition=".4s"

    third.classList.remove("active")
    fourthId.classList.remove("active");
     fourth.classList.remove("active")
}
);

third.addEventListener("click", ()=>{
    thirdId.classList.add("active");
    secondId.classList.remove("active");   
     productsContainer.style.transition=".4s"

    startId.classList.remove("active");
    Second.classList.remove("active");
    third.classList.add("active")
    Start.classList.remove("active");
    fourthId.classList.remove("active");
    fourth.classList.remove("active")
});
 
fourth.addEventListener("click", ()=>{
    fourthId.classList.add("active");
    secondId.classList.remove("active");   
     productsContainer.style.transition=".4s"
    startId.classList.remove("active");
    Second.classList.remove("active");
    fourth.classList.add("active");
    thirdId.classList.remove("active");
    third.classList.remove("active")
    Start.classList.remove("active")

})
const menuBarContainer = document.getElementById("menuContainer");
const Bars = document.querySelector(".bars");
const Menu = document.querySelector(".navigation")
const headEr = document.getElementById("head")
menuBarContainer.addEventListener("click", ()=>{
    // Bars.classList.toggle("active");
    Menu.classList.toggle("active");
    menuBarContainer.classList.toggle("active");
    headEr.classList.toggle("active")
})


const productsNav = document.querySelector(".productsNavigation");
const hToggle = document.getElementById("hToggle");

hToggle.addEventListener("click", ()=>{
productsNav.classList.toggle("active")



})




