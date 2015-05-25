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


