var SweetSelector = (function(){
  var select = (function(string){
    if (string[0] === '.'){
      return document.getElementsByClassName(string.slice(1))
    }
    else if (string[0] === '#'){
      return document.getElementById(string.slice(1))
    }
    else{
      return document.getElementsByTagName(string)
    }
  });

  return {
    select: select
  }
})();

var DOM = (function(){
  var hide = (function(string){
    if (string[0] === '#'){
      document.getElementById(string.slice(1)).style.display = "none"
    }

    else if (string[0] === '.'){
      var classElements = document.getElementsByClassName(string.slice(1))
      for (var i = 0; i < classElements.length; i ++){
        classElements[i].style.display = "none"
      }
    }

    else{
      var tagElements = document.getElementsByTagName(string)
      for (var i = 0; i < tagElements.length; i ++){
        tagElements[i].style.display = "none"
      }
    }
  });

  var show = (function(string){
    if (string[0] === '#'){
      document.getElementById(string.slice(1)).style.display = "block"
    }

    else if (string[0] === '.'){
      var classElements = document.getElementsByClassName(string.slice(1))
      for (var i = 0; i < classElements.length; i ++){
        classElements[i].style.display = "block"
      }
    }

    else{
      var tagElements = document.getElementsByTagName(string)
      for (var i = 0; i < tagElements.length; i ++){
        tagElements[i].style.display = "block"
      }
    }
  });

  return {
    hide: hide,
    show: show,
  }
})();

