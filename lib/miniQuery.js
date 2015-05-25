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



