
var SweetSelector = (function() {

  var select = (function(element) {
    return document.querySelectorAll(element)
  });

  var hide = (function(element) {
    var elements = this.select(element);
    for (var i = 0; i < elements.length; i++)
      elements[i].style.display = "none";
  });

  var show = (function(element) {
    var elements = this.select(element);
    for (var i = 0; i < elements.length; i++)
      elements[i].style.display = "inline";
  });

  var addClass = (function(element, cName) {
    var elements = this.select(element);
    for (var i = 0; i < elements.length; i++)
      elements[i].classList.add(cName);
  });

  var removeClass = (function(element, cName) {
    var elements = this.select(element);
    for (var i = 0; i < elements.length; i++)
      elements[i].classList.remove(cName);
  });

  return {
    select: select,
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass,
  }

})();

var EventDispatching = (function() {

  var on = (function(selector, event, callback) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++)
      elements[i].addEventListener(event, callback, false);
  });

  var trigger = (function(selector, event) {
    var event = new Event(event)
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].dispatchEvent(event);
    }
  });
  // fireEvent is for IE < 9

  return {
    on: on,
    trigger: trigger,
  }

})();
