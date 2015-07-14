var miniQuery = (function(){

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


  var AjaxWrapper = (function(){

    var XMLHttpRequest;

    if (window.XMLHttpRequest) {// Mozilla, Safari, ...
      XMLHttpRequest = window.XMLHttpRequest;
    }else if (window.ActiveXObject) {// IE
      XMLHttpRequest = ActiveXObject("Microsoft.XMLHTTP");
    }

    var Request = function(options){
      this._thenCallbacks = [];
      this._failCallbacks = [];

      this.method = options.method || 'GET'
      this.url = options.url || '/'
      this.xhr = new XMLHttpRequest;
      this.xhr.open(this.method, this.url, true)
      this.xhr.onreadystatechange = function(){
        if (this.xhr.readyState == 4) this._ready();
      }.bind(this);
      this.xhr.send();
    };


    Request.prototype._ready = function(){
      var xhr = this.xhr;
      var textStatus = xhr.statusText;
      if (xhr.status >= 400){ // FAIL
        var errorMessage = 'your AJAX sucks bro'
        this._failCallbacks.forEach(function(callback){
          callback(errorMessage, textStatus, xhr);
        });
      }else{ // SUCCESS
        var data = xhr.response
        this._thenCallbacks.forEach(function(callback){
          callback(data, textStatus, xhr);
        });
      }
    };

    Request.prototype.then = function(callback){
      this._thenCallbacks.push(callback);
      return this;
    };
    Request.prototype.fail = function(callback){
      this._failCallbacks.push(callback);
      return this;
    };

    var request = function(options){
      return new Request(options);
    };


    return {
      request: request
    }

  })(); //AJAXWrapper end
  var stuff = function(selector){
    return SweetSelector.select(selector)
  };
  stuff.SweetSelector = SweetSelector;
  stuff.DOM = DOM;
  stuff.EventDispatcher = EventDispatcher;
  stuff.AjaxWrapper = AjaxWrapper;
  return stuff;
  // return {
  //   SweetSelector: SweetSelector,
  //   DOM: DOM,
  //   EventDispatcher: EventDispatcher,
  //   AjaxWrapper: AjaxWrapper
  // }
})();

var $ = miniQuery;
// AjaxWrapper.request({
//  url: '/',
//  type: 'GET'
// }).then(function(data, textStatus, xhr) {
//   console.log('ALL GOOD', data)
// }).then(function(data, textStatus, xhr) {
//   console.log('ALL GOOD AGFAIN', data)
// }).fail(function(errorMessage, textStatus, xhr) {
//   console.log('ALL CRAP', errorMessage)
// });
