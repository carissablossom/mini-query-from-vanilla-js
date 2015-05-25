
var S = (function() {

  var select = (function(element) {
    return document.querySelectorAll(element)
  });

  var hide = (function(element) {
    console.log(this)
    var hello = this.select(element)
    console.log(hello)
    document.querySelectorAll(element).style.display = "none";
  })

  var show = (function(element) {
    this.select(element).style.display = "inline";
  })

  return {
    select: select,
    hide: hide,
    show: show,
  }

})();
