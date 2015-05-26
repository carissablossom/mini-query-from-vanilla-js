/*!
 * miniQuery lib code
 */

var sweetSelector = (function(){

  var select = (function(input){

    if(input.search("#") === 0){
      var input = input.slice(1);
      // console.log("id")
      return document.getElementById(input);
    }

    else if(input.search(/\./) === 0){
      var input = input.slice(1);
      // console.log("class")
      return document.getElementsByClassName(input);
    }

    else {
      return document.getElementsByTagName(input);
    }
  });

return {
  select: select
}

})();

var DOM = (function(){

  var hide = (function(input){
    var results = sweetSelector.select(input)

    if (input.search("#") === 0) {
      results.setAttribute("style", "display: none");
    }
    else {
      for (var i = 0; i < results.length; i++ ) {
        results[i].setAttribute("style", "display: none");
      }
        return
      }
    })

  var show = (function(input){
    var results = sweetSelector.select(input)

    if (input.search("#") === 0) {
      results.setAttribute("style", "display: block");
    }
    else {
      for (var i = 0; i < results.length; i++ ) {
        results[i].setAttribute("style", "display: block");
      }
        return
      }
    })

  var addClass = (function(input, className){
     var results = sweetSelector.select(input)

    if (input.search("#") === 0) {
      results.setAttribute("class", className);
    }
    else {
      for (var i = 0; i < results.length; i++ ) {
        results[i].setAttribute("class", className);
      }
        return
      }
    })

  })

  return {
    hide: hide,
    show: show,
    addClass: addClass
  }
})();
