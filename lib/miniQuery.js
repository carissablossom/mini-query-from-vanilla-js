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

  return {
    hide: hide,
    show: show
  };

})(SweetSelector);
