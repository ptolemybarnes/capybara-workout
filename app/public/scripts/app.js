var _ = (function() {
  var getParent = R.curry(function(parentFilter, child) {
    return child.parent(parentFilter)
  })

  var append    = R.curry(function(elem, target) {
    target.append(elem)
  });

  var getClickedElement = function() {
    return $( this )
  }

  var getParentSection = getParent("section");

  var appendMessageToParentSection = function(message) {
    return R.compose(append(message), getParentSection, getClickedElement)
  }

  return {
    appendMessageToParentSection: appendMessageToParentSection
  }

})();

$( document ).ready(function() {

  var elementsAndSuccessMessages = {
    'section.first button' : 'Well done!',
    'section.second button'  : "Success!",
    'section.third button'  : "Nice one!",
    'section.fifth button'   : "Well done, you clicked the button with an ID",
    'section.sixth button.top'  : "Well done, you clicked the button tagged with the 'top' class",
    'section.sixth button.bottom'  : "Well done, you clicked the button tagged with the 'bottom' class",
  }

  $.each(elementsAndSuccessMessages, function(elementDescriptor, successMsg) {
    $( elementDescriptor ).click(_.appendMessageToParentSection(successMsg));
  });

  
});

