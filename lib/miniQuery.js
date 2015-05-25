var SweetSelector = (function() {

  var select = (function(selectors) {
    var selector = selectors.slice(1);

    switch(selectors[0]) {
      case '#':
        return [document.getElementById(selector)];
        break;
      case '.':
        return document.getElementsByClassName(selector);
        break;
      default:
        return document.getElementsByTagName(selectors);
        break;
    }
  });

  return {
    select: select,
  }
})();

var DOM = (function() {

  // var slice = function(selectors) { return selectors.slice(1); }

  var hide = (function(selectors) {
    var elements = SweetSelector.select(selectors);
    for (var i = 0; i < elements.length; i++){
      elements[i].setAttribute("style", "display: none;");
    }
  });

  var show = (function(selectors) {
    var elements = SweetSelector.select(selectors);
    for (var i = 0; i < elements.length; i++){
      elements[i].setAttribute("style", "display: block;");
    }
  });

  var addClass = (function(selectors, newClass) {
    var elements = SweetSelector.select(selectors);
    for (var i = 0; i < elements.length; i++){
      // elements[i].setAttribute("div", "display: block;");
      elements[i].classList.add(newClass);
    }
  });

  var removeClass = (function(selectors, newClass) {
    var elements = SweetSelector.select(selectors);
    for (var i = 0; i < elements.length; i++){
      elements[i].classList.remove(newClass);
    }
  });

  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass,
  }
})();

var EventDispatcher = (function() {

  var actions = {};

  var on = (function(selectors, event, callBack) {
    actions[selectors] = {};
    actions[selectors][event] = callBack;
  });

  var trigger = (function(selectors, event) {
    // var elements = SweetSelector.select(selectors);
    actions[selectors][event]();
    // for (var i = 0; i < elements.length; i++){
    //   if (elements[i] ===
    // }
  });

  return {
    on: on,
    trigger: trigger,
  }
})();

