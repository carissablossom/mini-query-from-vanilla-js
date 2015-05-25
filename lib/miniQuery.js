var SweetSelector = (function () {
  function select(element) {
    if (element.match(/^#/)) {
      return document.getElementById(element.slice(1))
    } else if (element.match(/^\./)) {
      return document.getElementsByClassName(element.slice(1))
    } else {
      return document.getElementsByTagName(element)
    }
  }

  return {
     select: select
  };
})();
