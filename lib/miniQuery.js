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

var DOM = function(){
  // var keyword = selector.slice(1);
  // var selectedItems = SweetSelector.select(selector);
  var hide = function(selector) {
    var selectedItems = SweetSelector.select(selector);
    for (var i=0; i < selectedItems.length; i++) {
      selectedItems[i].style.display = 'none';
    }
  };
  var show = function(selector) {
    var selectedItems = SweetSelector.select(selector);
    for (var i=0; i < selectedItems.length; i++) {
      selectedItems[i].style.display = 'block';
    }
  };
  var addClass = function(selector, newClass) {
    var selectedItems = SweetSelector.select(selector);
    var keyword = selector.slice(1);
    for (var i=0; i < selectedItems.length; i++) {
      selectedItems[i].className = keyword + " " + newClass;
    }
  };

  var removeClass = function(selector, classToRemove) {
    var selectedItems = SweetSelector.select(selector);
    var keyword = selector.slice(1);
    for (var i=0; i < selectedItems.length; i++) {
      var currentClassName = selectedItems[i].className;
      var indexOfRemoval = currentClassName.indexOf(classToRemove);
      var newClassName = currentClassName.slice(indexOfRemoval, classToRemove.length)
      selectedItems[i].className = keyword + " " + newClass;
    }
  };

  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  };
}();

// Release 1
DOM.hide('.klass') // hides the div
DOM.show('.klass') // shows the div
DOM.addClass('.klass', 'shadi')
// div.klass should look like this: <div class="klass shadi">klass</div>
DOM.removeClass('.klass', 'shadi')
// div.klass should look like this: <div class="klass">klass</div>
