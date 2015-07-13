var SweetSelector = (function(){

  var select = (function(css){
    var firstChar = css.charAt(0);
    var slice = css.slice(1, css.length);

    if ( firstChar === "."){
      return document.getElementsByClassName(slice);
    } else if (firstChar === "#") {
      return document.getElementById(slice);
    } else {
      return document.getElementsByTagName(css);
    }
  });

  return {
    select: select
  }

})(); //SweetSelector end


var DOM = (function(){

  var hide = function(css){
    var selected = SweetSelector.select(css);
    if (selected.length === 1) {
      selected.style.display = 'none';
    } else {
      for (i = 0; i < selected.length; i++) {
        selected[i].style.display = 'none';
      };
    };

  };

  var show = function(css){
    var selected = SweetSelector.select(css);
    if (selected.length === 1) {
      selected.style.display = '';
    } else {
      for (i = 0; i < selected.length; i++) {
        selected[i].style.display = '';
      };
    };

  };


  var addClass = function(css, className){
    var selected = SweetSelector.select(css);
    if (selected.length === 1) {
      selected.classList.add(className);
    } else {
      for (i = 0; i < selected.length; i++) {
        selected[i].classList.add(className);
      };
    };

  };

  var removeClass = function(css, className){
    var selected = SweetSelector.select(css);
    if (selected.length === 1) {
      selected.classList.remove(className);
    } else {
      for (i = 0; i < selected.length; i++) {
        selected[i].classList.remove(className);
      };
    };

  };

  return {
    hide: hide,
    show : show,
    addClass: addClass,
    removeClass: removeClass
  }

})(); //DOM end


var EventDispatcher = (function(){

  var events = {};

  var on = function(css, eventName, myFunction){
    var selected = SweetSelector.select(css);
    var event = new Event(eventName);
    if (selected.length === 1) {
      selected.addEventListener(eventName, myFunction, false);
    } else {
      for (i = 0; i < selected.length; i++) {
        selected[i].addEventListener(eventName, myFunction, false);
      };
    };
    events[eventName] = event;
    return event;
  };

  var trigger = function(css, eventName){
    var selected = SweetSelector.select(css);
    if (selected.length === 1) {
      selected.dispatchEvent(events[eventName]);
    } else {
      for (i = 0; i < selected.length; i++) {
        selected[i].dispatchEvent(events[eventName]);
      };
    };
  };


  return {
    on: on,
    trigger: trigger
  }

})(); //eventDispatcher end




