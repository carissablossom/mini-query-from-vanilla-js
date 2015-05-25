/*!
 * miniQuery lib code
 */

// Release 0
var SweetSelector = (function(){
  var select = (function(s){
    var q = s[0];
    if (q === "#"){
      return document.getElementById(s.slice(1));
    }
    else if (q === ".") {
      return document.getElementsByClassName(s.slice(1));
    }
    else {
      return document.getElementsByTagName(s);
    }

  });
  return {
    select: select,
  }
})(); //end of SweetSelector


// //Release 1
// DOM.hide('.klass') // hides the div
// DOM.show('.klass') // shows the div
var DOM = (function(){
  var hide = function(s){
    SweetSelector.select(s).style.visibility = "hidden";
  };

  var show = function(s){
    SweetSelector.select(s).style.visibility = "";
  };

  return {
    hide: hide,
    show: show,
  };

})();
