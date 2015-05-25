
var S = (function() {

  var select = (function(element) {
    return document.querySelectorAll(element)
  });

  var hide = (function(element) {
    var elements = this.select(element);
    for (var i = 0; i < elements.length; i++)
      elements[i].style.display = "none";
  })

  var show = (function(element) {
    var elements = this.select(element);
    for (var i = 0; i < elements.length; i++)
      elements[i].style.display = "inline";
  })

  return {
    select: select,
    hide: hide,
    show: show,
  }

})();
