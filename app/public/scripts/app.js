$( document ).ready(function() { 
  
  var getParent = R.curry(function(parentFilter, child) {
    return child.parent(parentFilter)
  })
  var getParentSection = getParent("section");

  $( 'section.first button' ).click(function() { 
    getParentSection($(this)).append("Well done!");
  });

  $( 'section.second button' ).click(function() { 
    getParentSection($(this)).append("Success!");
  });

});
