/*!
 * miniQuery lib code
 */

SweetSelector = (function() {
  return {
    select:
    function(someCss){
      if (someCss.match(/^#/)){
        return document.getElementById(someCss.slice(1));
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
    hide:
    function(someCss){
      var nodes = ss.select(someCss)
      if (nodes.length === undefined) {
        nodes.style.display = 'none';
      } else {
        for (var i = 0; i < nodes.length; i++) {
          nodes[i].style.display = 'none';
        }
      }
    },

    show:
    function(someCss){
      var nodes = ss.select(someCss)
      if (nodes.length === undefined) {
        nodes.style.display = '';
      } else {
        for (var i = 0; i < nodes.length; i++) {
          nodes[i].style.display = '';
        }
      }
    },

    addClass:
    function(someCss, klassName){
      var nodes = ss.select(someCss)
      if (nodes.length === undefined) {
        nodes.style.display = '';
      } else {
        for (var i = 0; i < nodes.length; i++) {
          nodes[i].style.display = '';
        }
      }
    },
  };
})(SweetSelector);

