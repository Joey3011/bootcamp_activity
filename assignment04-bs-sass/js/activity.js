// Select The Elements
var toggle_btn;
var big_wrapper;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  bg_wrapper = document.querySelector(".bg-wrapper");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
let clone = bg_wrapper.cloneNode(true);

  if (localStorage.getItem("dark")==='true') {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
clone.classList.add("copy");
main.appendChild(clone);
document.body.classList.add("stop-scrolling");



document.body.classList.remove("stop-scrolling");
bg_wrapper.remove();
clone.classList.remove("copy");
// Reset Variables
declare();
events();
}

function checkStatus(){
  if(localStorage.getItem("dark")==='true'){
    localStorage.setItem("dark", 'false');
  }else{
    localStorage.setItem("dark", 'true');
}
toggleAnimation();
}

function events() { 
  toggle_btn.addEventListener("click", () => {
    checkStatus();
  });
}
window.addEventListener("load", () => {
  toggleAnimation();
});
events();