/*!
 * miniQuery lib code
 */

var SweetSelector = (function() {
  var select = (function(target) {
    var identifier = target.charAt(0);
    var name = target.slice(1, target.length);

    switch(identifier) {
      case '#':
        return document.getElementById(name);
        break;
      case '.':
        return document.getElementsByClassName(name);
        break;
      default:
        return document.getElementsByTagName(target);
    };
  });
  return {
    select: select
  };
})();

var convertElements = (function() {
  var manipulateElement = (function(target, manipulation) {
    var elementsArray = getElementsArray(target);
    elementsArray.forEach(manipulation);
    return elementsArray;
  });

  var getElementsArray = (function(target) {
    var elements = getElement(target);
    return convertToArray(elements);
  });

  var getElement = (function(target) {
    return SweetSelector.select(target);
  });

  var convertToArray = (function(collection) {
    return [].slice.call(collection);
  });

  return {
    manipulateElement: manipulateElement,
  };
})();

var DOM = (function() {
  var show = (function(target) {
    convertElements.manipulateElement(target, (function(element) {
      element.style.visibility = "visible";
    }));
  });

  var hide = (function(target) {
    convertElements.manipulateElement(target, (function(element){
      element.style.visibility = "hidden";
    }));
  });

  var addClass = (function(target, newClass) {
    convertElements.manipulateElement(target, (function(element){
      element.classList.add(newClass);
    }));
  });

  var removeClass = (function(target, existingClass) {
    convertElements.manipulateElement(target, (function(element){
      element.classList.remove(existingClass);
    }));
  });

  return {
    show: show,
    hide: hide,
    addClass: addClass,
    removeClass: removeClass
  };
})();

var EventDispatcher = (function() {
  var on = (function(klass, eventName, callBack) {
    convertElements.manipulateElement(klass, function(element){
      element.addEventListener(eventName, callBack, false); })
  });

  var trigger = (function(target, eventName) {
    convertElements.manipulateElement(target, function(element){
      element.dispatchEvent(new Event(eventName)); })
  });

  return {
    on: on,
    trigger: trigger
  };
})();

var AjaxWrapper = (function(){
  var request = (function(requestObj) {

    var promise = new Promise(function(resolve, reject) {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.open(requestObj["type"], requestObj["url"]);
      xmlhttp.onload = function() {

        if (this.status == 200) {
          resolve(this.response);
        } else {
          reject(Error(this.statusText)); }
      }

      xmlhttp.onerror = function() {
        reject(Error("Network Error"))
      }

      xmlhttp.send();
    })
    return promise;
  })

  return {
    request: request
  };
})();

AjaxWrapper.request({
  url: 'http://localhost:3000/erd',
  type: 'GET'
}).then(function(data, textStatus, xhr) {
  console.log(data)
})
// .fail(function(errorMessage, textStatus, xhr) {
//   console.log("fail")
//   console.log(data)
// });

