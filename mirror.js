let inputEl = document.querySelector('#input');
let firstArticle = document.querySelector('#firstArticle');
let secondArticle = document.querySelector('#secondArticle');
let main = document.getElementById('main');


inputEl.addEventListener("keyup", function () { 
  secondArticle.textContent = inputEl.value;
  firstArticle.textContent = inputEl.value;
})




let font = document.querySelector("#font")
let container = document.getElementById("container");


font.addEventListener("click", function (event) {
  event.target.id = container;
  container.classList.toggle("textContainer");
})




let fieldEl = document.getElementById("keypress-input")

fieldEl.addEventListener("keyup", function (event) {
    outputEl.innerHTML = event.target.value
})


firstArticle.addEventListener("click", function (event)
{
//  firstArticle.innerHTML += event.target.value;
  
});

