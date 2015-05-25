// var $ = (function(){
//   var miniQuery = function(string){
//     if(string[0] === '#'){
//       range = 1..-1
//       document.getElementById()
//     }
//   };
//   miniQuery.prototype.methodName = function(){};
//   return miniQuery();
// })();


var SweetSelector = (function(){
  return function(string){
    if (string[0] === '#') {
      return document.getElementById(string.substr(1, string.length - 1))
    } else if (string[0] === '.') {
      return document.getElementsByClassName(string.substr(1, string.length - 1))
    } else {
      return document.getElementsByTagName(string)
    }
  };
})();

var DOM = (function(){
  // var returnFunction = function(){};
  // returnFunction.prototype.hide = function(string){}
  // returnFunction.prototype.show = function(string){}
  // returnFunction.prototype.addClass = function(oldClass, new){}
  // returnFunction.prototype.removeClass = function(){}
  // return returnFunction;
})();
