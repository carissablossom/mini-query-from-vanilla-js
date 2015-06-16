/*!
 * miniQuery lib code
 */


var _ = (function() {

  var select = function(selector) {
    return document.querySelectorAll(selector)
  }

  var hide = function(selector) {
    var mySelect = select(selector)
    for (var i = 0; i < mySelect.length; i++) {
      console.log(mySelect[i])
       mySelect[i].style.display = "none";
    }
  }

  var show = function(selector) {
    var mySelect = select(selector)
    for (var i = 0; i < mySelect.length; i++) {
      console.log(mySelect[i])
       mySelect[i].style.display = "block";
    }
  }

  var addClass = function(selector, classToAdd) {
    var mySelect = select(selector)
    for (var i = 0; i < mySelect.length; i++) {
      console.log(mySelect[i])
      // mySelect[i].setAttribute("class", classToAdd);
      mySelect[i].classList.add(classToAdd);
    }
  }

  var removeClass = function(selector, classToRemove) {
    var mySelect = select(selector)
    for (var i = 0; i < mySelect.length; i++) {
      console.log(mySelect[i])
      mySelect[i].classList.remove(classToRemove);
      if (mySelect[i].className == "") {
        mySelect[i].removeAttribute("class")
      }
    }
  }

  var on = function(selector, event, fn) {
    console.log(select(selector))
    select(selector)[0].addEventListener(event, fn);
  };

  var trigger = function(selector, event) {
    var myEvent = new Event (event);
    select(selector)[0].dispatchEvent(myEvent);
  };

  return {
    select: select,
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass,
    // event: event
    on: on,
    trigger: trigger
  }

})();
