var SweetSelector = (function() {

  var select = (function(selectors) {
    var selector = selectors.slice(1);

    switch(selectors[0]) {
      case '#':
        return document.getElementById(selector);
        break;
      case '.':
        return document.getElementsByClassName(selector);
        break;
      default:
        return document.getElementsByTagName(selectors);
        break;
    }
  });

  return {
    select: select,
  }
})();

