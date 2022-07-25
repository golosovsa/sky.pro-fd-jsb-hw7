theButton = document.querySelector(".exc__button");

theButton.addEventListener("click", (event => {
    button = event.srcElement;
    parent = event.srcElement.parentNode;

    const newH1 = document.createElement("h1");
    newH1.classList.add("exc__title");
    newH1.appendChild(document.createTextNode(event.target.textContent));
    
    button.remove();
    parent.appendChild(newH1);
}));