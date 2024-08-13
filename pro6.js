const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
inputEl.checked = false;
update ()  

function update() {
     if (inputEl.checked) {
         bodyEl.style.background ="black";
     } else{
  bodyEl.style.background = "white"
     }
}
inputEl.addEventListener("input" , () =>{
   update() 

} )