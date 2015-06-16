/*!
 * miniQuery lib code
 */

var SweetSelector = (function(){

  var selector = (function(elem){
    if(elem[0] === '.'){
      var elemStr = elem.substring(1);
      var foundClass = document.getElementsByClassName(elemStr);
      return foundClass;
    }
    else if(elem[0] === '#'){
      var classArr = []
      var elemStr = elem.substring(1);
      var foundID = document.getElementById(elemStr);
      classArr.push(foundID);
      return classArr;
    }
    else{
      var foundTag = document.getElementsByTagName(elem);
      return foundTag;
    }
  });

  return {
   selector: selector
  }
})();

var DOM = (function(){
  var hide = (function(elem){
    var selLength = SweetSelector.selector(elem).length;
    for(var x = 0; x < selLength; x++){
      SweetSelector.selector(elem)[x].style.display = "none";
    }
  });

  var show = (function(elem){
    var selLength = SweetSelector.selector(elem).length;
    for(var x = 0; x < selLength; x++){
      SweetSelector.selector(elem)[x].style.display = "initial";
    }
  });

  var addClass = (function(elem, newClass){
    var oldElem = SweetSelector.selector(elem);

    for(var x = 0; x < oldElem.length; x++){
      oldElem[x].className += ' ' + newClass;
    }

    return oldElem;
  });

  var removeClass = (function(elem, remClass){
    var oldElem = SweetSelector.selector(elem);

    for(var x = 0; x < oldElem.length; x++){
      oldElem[x].className -= remClass;
    }

    return oldElem;
  });

  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  }

})();















