var SweetSelector = (function () {
  function select(element) {
    if (element.match(/^#/)) {
      return [document.getElementById(element.slice(1))]
    } else if (element.match(/^\./)) {
      return document.getElementsByClassName(element.slice(1))
    } else {
      return document.getElementsByTagName(element)
    }
  }

  return {
     select: select
  };
})();

var DOM = (function(miniQuerySelector) {

  function hide(element) {
    var object = miniQuerySelector.select(element);
    for (var i = 0; i< object.length; i++) {
      object[i].style.display = 'none';
    }
  };

  function show(element) {
    var object = miniQuerySelector.select(element);
    for (var i = 0; i< object.length; i++) {
      object[i].style.display = '';
    }
  };

 function addClass(element, newClass) {
    var object = miniQuerySelector.select(element);
    for (var i = 0; i< object.length; i++) {
      object[i].className = newClass + " " + object[i].className;
    }
  };

  function removeClass(element, trashClass) {
    var object = miniQuerySelector.select(element);
    for (var i = 0; i< object.length; i++) {
      object[i].classList.remove(trashClass);
    }
  };

  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  };

})(SweetSelector);



