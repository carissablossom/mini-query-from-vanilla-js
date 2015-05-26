/*!
 * miniQuery lib code
 */

SweetSelector = (function() {
  return {
    select: function(someCss) {
      if (someCss.match(/^#/)){
        return [document.getElementById(someCss.slice(1))];
      } else if(someCss.match(/^\./)) {
        return document.getElementsByClassName(someCss.slice(1));
      } else {
        return document.getElementsByTagName(someCss);
      }
    }
  };
})();

DOM = (function(ss){
  return {
    hide: function(someCss) {
      var nodes = ss.select(someCss);
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.display = 'none';
      }
    },

    show: function(someCss) {
      var nodes = ss.select(someCss);
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.display = '';
      }
    },

    addClass: function(someCss, klassName) {
      var nodes = ss.select(someCss);
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].className += ' ';
        nodes[i].className += klassName;
      }
    },

    removeClass: function(someCss, klassName) {
      var nodes = ss.select(someCss);
      for (var i = nodes.length - 1; i >= 0; i--) {
        target = nodes[i];
        target.className = target.className.replace(new RegExp('\\b'+klassName+'\\b'), '').trim();
      }
    }
  };
})(SweetSelector);


EventDispatcher = (function(ss) {
  return {
    on: function(someCss, eventName, callback) {
      var nodes = ss.select(someCss);
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener(eventName, callback);
      }
    },
    trigger: function(someCss, eventName) {
      var event = new Event(eventName)
      var nodes = ss.select(someCss);
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].dispatchEvent(event);
      }
    }

  };

})(SweetSelector);

AjaxWrapper = (function() {

  var promise = {
    then: function(callback) {
      this.success = callback;
    },
    fail: function(callback) {
      this.failSUcka = callback;
    },
    failSUcka: function() {
      console.log('error')
    },
    success: function() {
      console.log('success')
    }
  };

  var request = function(obj) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
        if(xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status == 0) {
          promise.success(xmlhttp.response, xmlhttp.statusText, xmlhttp);
        }
        else if(xmlhttp.status >= 400 && xmlhttp.status < 500) {
          promise.failSUcka(xmlhttp.responseText, xmlhttp.statusText, xmlhttp);
        }
        else {
          alert('some other status was returned')
        }
      }
    }
    if (obj.success) {
      promise.success = obj.success;
    }
    if (obj.fail) {
      promise.failSUcka = obj.fail;
    }
    xmlhttp.open(obj.type, obj.url, true);
    xmlhttp.send();
    return promise;
  }

  return {
    request: request,
  };

})();









var $ = (function() {
  var MiniQueryObj = function() {
    this.selected = null;
  }

  var miniQuery = function(someCss) {

    var obj = new MiniQueryObj;

    MiniQueryObj.prototype.hide = function() {
      var nodes = this.selected;
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.display = 'none';
      }
    }
    MiniQueryObj.prototype.show = function() {
      var nodes = this.selected;
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.display = '';
      }
    }
    MiniQueryObj.prototype.addClass = function(klassName) {
      var nodes = this.selected;
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].className += ' ';
        nodes[i].className += klassName;
      }
    }
    MiniQueryObj.prototype.removeClass = function(klassName) {
      var nodes = this.selected;
      for (var i = nodes.length - 1; i >= 0; i--) {
        target = nodes[i];
        target.className = target.className.replace(new RegExp('\\b'+klassName+'\\b'), '').trim();
      }
    }

    if (someCss.match(/^#/)){
      obj.selected = [document.getElementById(someCss.slice(1))];
    } else if(someCss.match(/^\./)) {
      obj.selected = document.getElementsByClassName(someCss.slice(1));
    } else {
      obj.selected = document.getElementsByTagName(someCss);
    }
    return obj

  }

  return miniQuery;

})();

