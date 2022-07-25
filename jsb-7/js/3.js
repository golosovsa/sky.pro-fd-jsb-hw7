excButtons = document.querySelectorAll(".exc");

function fakeButtonClickHandler(event) {
    const button = event.srcElement.parentElement.querySelector(".exc__truth");
    button.click();
}

function truthButtonEventHandler(event) {
    const fake = event.srcElement.parentElement.querySelector(".exc__fake");
    let opacity = fake.style.opacity || 1;
    opacity /= 2.;
    if (opacity < 0.2) opacity = 0.2;
    fake.style.opacity = opacity;
}

for (button of excButtons) {
    fakeButton = button.querySelector(".exc__fake");
    truthButton = button.querySelector(".exc__truth");

    fakeButton.addEventListener("click", fakeButtonClickHandler);
    truthButton.addEventListener("click", truthButtonEventHandler);
}