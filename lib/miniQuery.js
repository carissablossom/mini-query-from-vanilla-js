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

var EventDispatcher = (function(miniQuerySelector){

  function on(element, event, passedInFunction) {
    var object = miniQuerySelector.select(element);
     for (var i = 0; i< object.length; i++) {
      object[i].addEventListener(event, passedInFunction)
    }
  };

  function trigger(element, event) {
    var object = miniQuerySelector.select(element);
    for (var i = 0; i< object.length; i++) {
      object[i].dispatchEvent(new Event(event));
    }
  };

  return {
    on: on,
    trigger: trigger,
  }

})(SweetSelector);


var AjaxWrapper = (function(){
  function request(params){
    var promise = new Promise(function(resolve, request){
      var httpRequest = new XMLHttpRequest();

      httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === 4){
          resolve(httpRequest.response);
        }
      };

      httpRequest.open(params.type, params.url, true);
      httpRequest.send()
    });

    return promise
  };

  return {
    request: request
  };

})();


