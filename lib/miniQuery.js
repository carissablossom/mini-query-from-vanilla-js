var SweetSelector = (function() {
  var select = (function(element) {
    var symbol = element[0];
    var name = element.slice(1);
    if (symbol === '#') {
      return document.getElementById(name);
    } else if (symbol === '.') {
      return document.getElementsByClassName(name);
    } else {
      return document.getElementsByTagName(element);
    }
  });

  return {
    select: select,
  }
})();

var DOM = (function() {
  var toggle = (function(element, display) {
    var symbol = element[0];
    if (symbol === '#') {
      SweetSelector.select(element).style.display = display;
    } else {
      var elementArray = SweetSelector.select(element);
      for (var i = 0; i < elementArray.length; i++){
        elementArray[i].style.display = display;
      }
    }
  });

  var hide = (function(element) {
    toggle(element, "none")
  });

  var show = (function(element) {
    toggle(element, "block")
  });

  var addClass = (function(currentClass, newClass){
    var elementArray = SweetSelector.select(currentClass);
    for (var i = 0; i < elementArray.length; i++){
      elementArray[i].className += ' ' + newClass;
      elementArray[i].className = elementArray[i].className.trim();
    };
  });

  var removeClass = (function(currentClass, classToRemove){
    var elements = SweetSelector.select(currentClass)
    for (var i = 0; i < elements.length; i++){
      var name = elements[i].getAttribute("class").split(" ");

      for (var y = 0; y < name.length; y++) {
        if (name[y] === classToRemove) {
          name.splice(y)
        }
      };
      elements[i].className = name.join(" ");
    };
  });

  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  }
})();

var EventDispatcher = (function() {
  var on = (function(element, event, callback) {
    var thing = SweetSelector.select(element);
    thing.addEventListener(event, callback);
  });

  var trigger = (function(element, targetEvent) {
    event = new Event(targetEvent);
    SweetSelector.select(element).dispatchEvent(event);
  });

  return {
    on: on,
    trigger: trigger
  };
})();

var AjaxWrapper = (function() {

  var request = (function(requestData) {
    var promise = new Promise(function(resolve, reject) {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4){
          resolve(xmlhttp.response);
        }
      };

      xmlhttp.open(requestData.type, requestData.url, true);
      xmlhttp.send();
    });

    return promise
  });

  return {
    request: request
  };
})();
