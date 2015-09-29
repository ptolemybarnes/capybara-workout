(function() {
  $( document ).ready(initialize);

  function initialize() { 
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var imageObj = new Image();

    imageObj.onload = function() {
      context.drawImage(imageObj, 69, 70);
    };
    imageObj.src = "http://www.rainforest-alliance.org/sites/default/files/styles/responsive_breakpoints_theme_rainforest_wide_1x/public/slideshow/header/capybara_0.jpg?itok=G1uvWT23"
  }

})();
