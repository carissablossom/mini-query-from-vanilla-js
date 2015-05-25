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
// DOM.addClass('.klass', 'shadi')
// DOM.removeClass('.klass', 'shadi')

var DOM = (function(){
  var hide = function(s){
    SweetSelector.select(s).style.visibility = "hidden";
  };

  var show = function(s){
    SweetSelector.select(s).style.visibility = "";
  };

  var addClass = function(s, addition){
    if (addition){
      array = SweetSelector.select(s);
      for (var i = 0; i < array.length; i++ ){
        array[i].classList.add(addition)
      }
    }
  };

  var removeClass = function(s, deletion){
    if (deletion){
      array = SweetSelector.select(s);
      for (var i = 0; i < array.length; i++ ){
        array[i].classList.remove(deletion)
      }
    }
  };

  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass,
  };

})();
