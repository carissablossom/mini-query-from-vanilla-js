var SweetSelector = (function() {
  var select = (function(id) {
    var symbol = id[0];
    var name = id.slice(1);
    if (symbol === '#') {
      return document.getElementById(name);
    } else if (symbol === '.') {
      return document.getElementsByClassName(name);
    } else {
      return document.getElementsByTagName(id);
    }
  });

  // var functionName = (function() {
  // });

  return {
    select: select,
  }

})();
