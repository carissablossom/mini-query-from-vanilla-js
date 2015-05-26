/*!
 * miniQuery lib code
 */

// function SweetSelector(arg) {
//   document.getElementByID(arg)
// }
var SweetSelector = (function() {
  var select = function(args) {
    if (args.charAt(0) === '#') {
      var idName = args.slice(1)
      // debugger
      return document.getElementById(idName)
    } else if (args.charAt(0) === '.') {
      var className = args.slice(1)
      return document.getElementsByClassName(className)
    } else {
      return document.getElementsByTagName(args)
    }
  }
  return {
    select: select
  }
})()


var DOM = (function() {
  var hide = function(selector) {
    var hideThis = SweetSelector.select(selector)
    // debugger
    // hideThis.style.display='none'
    for (var i = 0; i < hideThis.length; i++) {
      hideThis[i].style.display = 'none'
    }
  }

  var show = function(selector) {
    var showThis = SweetSelector.select(selector)
    for (var i = 0; i < showThis.length; i++) {
      showThis[i].style.display = 'block'
    }
  }

  var addClass = function(selector, newClass) {
    var classAdd = SweetSelector.select(selector)
    // debugger
    var classLength = classAdd.length;
    for (var i = 0; i < classLength; i++) {
      classAdd[i].classList.add(newClass)
    }
  }

  var removeClass = function(selector, newClass) {
    var classRemove = SweetSelector.select(selector)
    var classLength = classRemove.length;
    for (var i = classLength - 1; i >= 0; --i) {
      classRemove[i].classList.remove(newClass);
    }
  }
  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  }
})();

var EventDispatcher = (function() {
  var method;
  var on = function(selector, event, handler) {
    method = handler;
    var x = SweetSelector.select(selector)
    for (var i = 0; i < x.length; i++) {
      x[i].addEventListener(event, handler);

    }
  }
  var trigger = function(selector, event) {
    var x = SweetSelector.select(selector)
    method();
    for (var i = 0; i < x.length; i++) {
      x[i].addEventListener(event, method);
    }
  }
  return {
    on: on,
    trigger: trigger
  }
})();
console.log(SweetSelector.select('#eyed'))
console.log(SweetSelector.select('.klass'))
console.log(SweetSelector.select('a'))
// DOM.hide('.klass')




