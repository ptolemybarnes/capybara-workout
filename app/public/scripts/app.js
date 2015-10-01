var _ = (function() {
  var getClickedElement = function() {
    return $( this )
  }

  var setHTMLofElement = R.curry(function(newValue, element) {
    element.html(newValue)
  });

  var getSiblingElement = R.curry(function(targetDescriptor, element) {
    return element.next(targetDescriptor);
  });
  
  return {
    setHTMLofElement: setHTMLofElement,
    getClickedElement: getClickedElement,
    getSiblingElement: getSiblingElement
  }

})();

$( document ).ready(function() {

  var elementsAndSuccessMessages = {
    'button.first' : 'Well done!',
    'button.second'  : "Success!",
    'div.third button'  : "Nice one!",
    'div.fourth button'  : "Nice one!", 
    'div.fifth button#left'   : "Well done, you clicked the button with an ID",
    'div.fifth button#right' : "Well done, you clicked the button with an ID",
    'div.sixth button.left'  : "Well done, you clicked the button tagged with the 'left' class",
    'div.sixth button.right'  : "Well done, you clicked the button tagged with the 'right' class",
  }

  $.each(elementsAndSuccessMessages, function(elementDescriptor, successMsg) {
    $( elementDescriptor ).one('click', R.compose(_.setHTMLofElement(successMsg), _.getClickedElement));
  });


  var inputsAndSuccessMessages = {
    'div.second input.first': 'Well done!',
    'div.second input.second': '^_^',
  }

  $.each(inputsAndSuccessMessages, function(elemDescriptor, successMsg) {
    $( elemDescriptor ).one('click', R.compose(_.setHTMLofElement(successMsg), _.getSiblingElement("span"),_.getClickedElement));
  });

});
