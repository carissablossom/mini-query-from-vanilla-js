/*!
 * miniQuery lib code
 */

var SweetSelector = (function(){
  return {
    select: function(selector){
      if (selector.includes("#")){
        var id = selector.replace("#", "");
        return document.getElementById(id)
      } else if
        (selector.includes(".")) {
        var classs = selector.replace(".", "")
        return document.getElementsByClassName(classs);
      } else {
        // var tag = selector
        return document.getElementsByTagName(selector);
      }
    }
  };
 })();

var DOM = (function(){
  var domelement;
  return {
    hide: function(item){
      domelement = SweetSelector.select(item);
      if (domelement.length > 1) {
        for (var i = 0; i < domelement.length; i++) {
          domelement[i].style.visibility = "hidden";
        };
      }
      else {
        domelement.style.visibility = "hidden";
      };
    },
    show: function(item){
      domelement = SweetSelector.select(item);
           if (domelement.length > 1) {
        for (var i = 0; i < domelement.length; i++) {
          domelement[i].style.visibility = "visible";
        };
      }
      else {
        domelement.style.visibility = "visible";
      };
    },

    addClass: function(target, className) {
      domelement = SweetSelector.select(target);
      if (domelement.length > 1) {
        for (var i = 0; i < domelement.length; i++) {
          domelement[i].classList.add(className);
        };
      }
      else {
        domelement.classList.add(className);
      }
    },
    removeClass: function(target, className) {
      domelement = SweetSelector.select(target);
      if (domelement.length > 1) {
        for (var i = 0; i < domelement.length; i++) {
          domelement[i].classList.remove(className);
        };
      }
      else {
        domelement.classList.remove(className);
      }
    },
  };
})();
