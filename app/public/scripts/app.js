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
 
  $( 'section.first button' ).click(_.appendMessageToParentSection("Well done!"));
  $( 'section.second button' ).click(_.appendMessageToParentSection("Success!"));
  $( 'section.third button' ).click(_.appendMessageToParentSection("Nice one!"));
  $( 'section.fifth button'  ).click(_.appendMessageToParentSection("Well done, you clicked the button with an ID"));
});

