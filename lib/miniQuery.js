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
    actions[selectors][event]();
  });

  return {
    on: on,
    trigger: trigger,
  }
})();

var AjaxWrapper = (function() {

  var request = (function(object) {
    var url = object.url;
    var type = object.type;

    var oReq = new XMLHttpRequest();
    // oReq.onload = reqListener;
    oReq.open(type, url, true);
    oReq.send();

    // oReq.addEventListener("progress", updateProgress, false);
    oReq.addEventListener("load", transferComplete, false);
    oReq.addEventListener("error", transferFailed, false);
    oReq.addEventListener("abort", transferCanceled, false);

    // function updateProgress (oEvent) {
    //   if (oEvent.lengthComputable) {
    //     var percentComplete = oEvent.loaded / oEvent.total;
    //   } else {

    //   }
    // }

    var failed;
    function transferComplete(evt) {
      alert("The transfer is complete.");
      failed = false
    }

    function transferFailed(evt) {
      alert("An error occurred while transferring the file.");
      failed = true
    }

    function transferCanceled(evt) {
      alert("The transfer has been canceled by the user.");
      failed = true
    }

    var then = (function(){
      if(!failed)
        console.log('success')
        // return {data: , textStatus: , xhr: ,}
      else{
        console.log( "BYE FELICIA");
      }

      var fail = (function(){
        if(failed)
          console.log('failed')
        else{}

      });
      return {
        fail: fail
      }


    })


    return {
      then: then,
    }
  });

  return {
    request: request,
  }
})();


