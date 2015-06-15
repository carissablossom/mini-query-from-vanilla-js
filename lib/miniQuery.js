var SweetSelector = function(){
  var select = function(selector) {
    var keyword = selector.slice(1);
    if (selector.includes("#")) {
      console.log(selector);
      console.log("id selector");
      return document.getElementById(keyword);
    }
    else if (selector.includes(".")){
      console.log(selector);
      console.log("class selector");
      return document.getElementsByClassName(keyword);
    }
    else {
      console.log("tag selector");
      console.log(selector);
      return document.getElementsByTagName(selector);
    };
  };
  return {
    select: select
  };
}();





// Release 0
// SweetSelector.select('#eyed');
// SweetSelector.select('.klass');
// SweetSelector.select('a');

