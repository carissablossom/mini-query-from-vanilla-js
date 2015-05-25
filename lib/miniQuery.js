var SweetSelector = (function(){
  var select = (function(itemSelect){
    if (itemSelect[0] === '.'){
      return document.getElementsByClassName(itemSelect.slice(1))
    }
    else if (itemSelect[0] === '#'){
      return document.getElementById(itemSelect.slice(1))
    }
    else{
      return document.getElementsByTagName(itemSelect)
    }
  });

  return {
    select: select
  }
})();

var DOM = (function(){
  var hide = (function(itemSelect){
    if (itemSelect[0] === '#'){
      document.getElementById(itemSelect.slice(1)).style.display = "none"
    }

    else if (itemSelect[0] === '.'){
      var classElements = document.getElementsByClassName(itemSelect.slice(1))
      for (var i = 0; i < classElements.length; i ++){
        classElements[i].style.display = "none"
      }
    }

    else{
      var tagElements = document.getElementsByTagName(itemSelect)
      for (var i = 0; i < tagElements.length; i ++){
        tagElements[i].style.display = "none"
      }
    }
  });

  var show = (function(itemSelect){
    if (itemSelect[0] === '#'){
      document.getElementById(itemSelect.slice(1)).style.display = "block"
    }

    else if (itemSelect[0] === '.'){
      var classElements = document.getElementsByClassName(itemSelect.slice(1))
      for (var i = 0; i < classElements.length; i ++){
        classElements[i].style.display = "block"
      }
    }

    else{
      var tagElements = document.getElementsByTagName(itemSelect)
      for (var i = 0; i < tagElements.length; i ++){
        tagElements[i].style.display = "block"
      }
    }
  });

  var addClass = (function(itemSelect, newClassName){
    if (itemSelect[0] === '#'){
      document.getElementById(itemSelect.slice(1)).classList.add(newClassName)
    }

    else if (itemSelect[0] === '.'){
      var classElements = document.getElementsByClassName(itemSelect.slice(1))
      for (var i = 0; i < classElements.length; i ++){
        classElements[i].classList.add(newClassName)
      }
    }

    else{
      var tagElements = document.getElementsByTagName(itemSelect)
      for (var i = 0; i < tagElements.length; i ++){
        tagElements[i].classList.add(newClassName)
      }
    }
  });
   var removeClass = (function(itemSelect, newClassName){
    if (itemSelect[0] === '#'){
      document.getElementById(itemSelect.slice(1)).classList.remove(newClassName)
    }

    else if (itemSelect[0] === '.'){
      var classElements = document.getElementsByClassName(itemSelect.slice(1))
      for (var i = 0; i < classElements.length; i ++){
        classElements[i].classList.remove(newClassName)
      }
    }

    else{
      var tagElements = document.getElementsByTagName(itemSelect)
      for (var i = 0; i < tagElements.length; i ++){
        tagElements[i].classList.remove(newClassName)
      }
    }
  });
  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  }
})();

var EventDispatcher = (function(){
  var on = (function(itemSelect, event, newFunction){
    item = SweetSelector.select(itemSelect)
    if (item.length >= 1){
      for (var i = 0; i < item.length; i ++){
        item[i].addEventListener(event, newFunction)
      }
    }
    else {
    item.addEventListener(event, newFunction)
  }
  })
  var trigger = (function(itemSelect, targetEvent){
    item = SweetSelector.select(itemSelect)
    var event = new Event(targetEvent);
    if (item.length >= 1){
      for (var i = 0; i < item.length; i ++){
        item[i].dispatchEvent(event)
      }
    }
    else {
    item.dispatchEvent(event)
  }
  })
  return {
    on: on,
    trigger: trigger
  }
})();


