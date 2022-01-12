const allButtons = document.querySelectorAll("button")

if(allButtons) {
    console.log(allButtons);
    allButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.add('clicked');
            button.innerHTML = "You clicked me!"
        });
    })
};