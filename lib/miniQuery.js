/*!
 * miniQuery lib code
 */

 var SweetSelector = (function(){

  var select = function(arg){

    var identifier = arg[0]

    if (identifier === '#') {
      var id = arg.replace(identifier, '');
      return document.getElementById(id);
    }
    else if(identifier === '.') {
      var klass = arg.replace(identifier, '');
      return document.getElementsByClassName(klass);
    }
    else {
      return document.getElementsByTagName(arg);
    }
  }
    return {
      select: select
    }

 })();

var DOM = (function(){

  var hide = (function(tag){
    var identifier = tag[0]

    if (identifier === '#') {
      SweetSelector.select(tag).style.display = 'none';
    } else {
      var elements = SweetSelector.select(tag);

      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
    }
  });

  var show = (function(tag){
    var identifier = tag[0]

    if (identifier === '#') {
      SweetSelector.select(tag).style.display = 'block';
    } else {
    var elements = SweetSelector.select(tag);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';

      }
    }
  });

  var addClass = (function(tag, newClass){
    var elements = SweetSelector.select(tag);

    for (var i = 0; i < elements.length; i++) {
      elements[i].className += " " + newClass;
    }
  });

  var removeClass = (function(args, rem){
    var elements = SweetSelector.select(args);

    for (var i = 0; i < elements.length; i++) {
      elements[i].className.replace(args, " ");
    }
  });

  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  }

})();
