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

// toggle button dark to light 
function toggleAnimation() {
  // Clone the wrapper
let clone = bg_wrapper.cloneNode(true);

// get whatever value save in local storage
  if (localStorage.getItem("dark")==='true') {
    //if true tanggalin si class light then replace it with dark class
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    // if value in local storage is false tanggalin si class dark then replace it with light class 
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  //add class copy to bgwrapper and append it to main element
clone.classList.add("copy");
main.appendChild(clone);




document.body.classList.remove("stop-scrolling");
bg_wrapper.remove();
clone.classList.remove("copy");
// Reset Variables
declare();
events();
}

function checkStatus(){
  //Check if there is a toggle button value save in local storage. 
  if(localStorage.getItem("dark")==='true'){
    //if true then set it to false
    localStorage.setItem("dark", 'false');
  }else{
    //else set it to true
    localStorage.setItem("dark", 'true');
}

toggleAnimation();
}

function events() { 
  //toggle button events
  toggle_btn.addEventListener("click", () => {
    //if clicked call check status function
    checkStatus();
  });
}
window.addEventListener("load", () => {
  //window events to keep either dark or light  
  toggleAnimation();
});
events();