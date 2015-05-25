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
    item = SweetSelector.select(itemSelect)
    if (item.length >= 1){
      for (var i = 0; i < item.length; i ++){
        item[i].style.display = "none"
      }
    }
    else {
    item.style.display = "none"
    }
  });

  var show = (function(itemSelect){
    item = SweetSelector.select(itemSelect)
    if (item.length >= 1){
      for (var i = 0; i < item.length; i ++){
        item[i].style.display = "block"
      }
    }
    else {
    item.style.display = "block"
    }
  });

  var addClass = (function(itemSelect, newClassName){
    item = SweetSelector.select(itemSelect)
    if (item.length >= 1){
      for (var i = 0; i < item.length; i ++){
        item[i].classList.add(newClassName)
      }
    }
    else {
    item.classList.add(newClassName)
    }
  });
  var removeClass = (function(itemSelect, removeClassName){
    item = SweetSelector.select(itemSelect)
    if (item.length >= 1){
      for (var i = 0; i < item.length; i ++){
        item[i].classList.remove(removeClassName)
      }
    }
    else {
    item.classList.remove(removeClassName)
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

// var AjaxWrapper = (function(){
//   var request = (function(args){
//     url: args.url,
//     type: args.type
//   }).then()

//   return {
//     request: request
//   }
// })


