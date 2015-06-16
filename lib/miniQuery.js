/*!
 * miniQuery lib code
 */

 var SweetSelector = (function(){
  var select = (function(e){
    // switch(e.charAt(0)){
    //   case("#"):
    //     return document.getElementById(e.slice(1))
    //     break;
    //   case("."):
    //     return document.getElementsByClassName(e.slice(1))
    //     break;
    //   default:
    //     return document.getElementsByTagName(e)
    // }
    return document.querySelectorAll(e)
  });
 return {
    select: select
  }
 })();

 var DOM = (function(){
  var hide = (function(e){
    for (var i = 0; i < SweetSelector.select(e).length; i++){
      SweetSelector.select(e)[i].style.visibility = "hidden";
    }
  })

  var show = (function(e){
    for (var i = 0; i < SweetSelector.select(e).length; i++){
      SweetSelector.select(e)[i].style.visibility = "visible";
    }
  })

  var addClass = (function(e,klassName){
    for (var i = 0; i < SweetSelector.select(e).length; i++){
      SweetSelector.select(e)[i].classList.add(klassName);
    }
  })
   var removeClass = (function(e,klassName){
    for (var i = 0; i < SweetSelector.select(e).length; i++){
      SweetSelector.select(e)[i].classList.remove(klassName);

    }
  })

  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  }
 })();
