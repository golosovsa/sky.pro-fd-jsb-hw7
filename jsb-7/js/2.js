excButtons = document.querySelectorAll(".exc");

for (button of excButtons) {
    excButton = button.querySelector(".exc__button");
    excButton.addEventListener("click", excButtonClickHandler)
} 

function excButtonClickHandler(event) {
    button = event.srcElement;
    parent = event.srcElement.parentNode;

    const newH1 = document.createElement("h1");
    newH1.classList.add("exc__title");
    newH1.appendChild(document.createTextNode(event.target.textContent));
    
    button.remove();
    parent.appendChild(newH1);
}