const allButtons = document.querySelectorAll("button")
const allCheckboxes = document.querySelectorAll("input[type=checkbox]")

if(allButtons) {
    allButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.add('clicked');
            button.innerHTML = "You clicked me!"
        });
    })
};

if(allCheckboxes) {
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                const label = document.querySelector(`label[for="${checkbox.name}"]`)
                label.innerHTML = `<input name="${checkbox.name}" type="checkbox" checked>You clicked me!`;
            }
        });
    })
};