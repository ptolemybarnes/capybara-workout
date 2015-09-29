var _ = (function() {
  var getClickedElement = function() {
    return $( this )
  }

  var setHTMLofElement = R.curry(function(newValue, element) {
    element.html(newValue)
  });
  
  return {
    setHTMLofElement: setHTMLofElement,
    getClickedElement: getClickedElement
  }

})();

$( document ).ready(function() {

  var elementsAndSuccessMessages = {
    'div.first button' : 'Well done!',
    'div.second button'  : "Success!",
    'div.third button'  : "Nice one!",
    'div.fifth button#top'   : "Well done, you clicked the button with an ID",
    'div.fifth button#bottom' : "Well done, you clicked the button with an ID",
    'div.sixth button.top'  : "Well done, you clicked the button tagged with the 'top' class",
    'div.sixth button.bottom'  : "Well done, you clicked the button tagged with the 'bottom' class",
  }

  $.each(elementsAndSuccessMessages, function(elementDescriptor, successMsg) {
    $( elementDescriptor ).one('click', R.compose(_.setHTMLofElement(successMsg), _.getClickedElement));
  });

  $( 'section.madlibs form submit' ).click(function(event) {
    event.preventDefault();
    $('body');
  });

});

