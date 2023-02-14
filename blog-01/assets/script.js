let inputElement = document.querySelector("input");
let listElement = document.querySelector(".principal");
let itemElement = listElement.querySelectorAll(".content");
 
//Logica de busca por palavra
inputElement.addEventListener("input", (e) => {
  let inputed = e.target.value.toLowerCase();

  itemElement.forEach((div) => {
    let text = div.textContent.toLowerCase();

    if(text.includes(inputed)) {
      div.style.display = "block"
    } else {
      div.style.display = "none"
    }
  })
})