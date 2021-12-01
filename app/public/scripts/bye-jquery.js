// document.getElementById("MyElement").classList.remove('MyClass');
const firstButton = document.getElementById("button-one")

if(firstButton) {
    console.log(firstButton);
    firstButton.addEventListener("click", () => firstButton.classList.add('MyClass'));
}

const animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var celebrationButtons = document.getElementsByClassName("celebrate");
  
  for (var i = 0; i < celebrationButtons.length; i++) {
    celebrationButtons[i].addEventListener('click', animateButton, false);
  }