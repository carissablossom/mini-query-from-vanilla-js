/*!
 * miniQuery lib code
 */

//  var mathy = (function() {

//   var topSecret = "shhhhhh";

//   var factorial = (function(n) {
//     return Math.factorial(n);
//   });

//   var square = (function(n) {
//     console.log("square");
//     secretFunctionTime();
//     console.log("square out");
//     return n*n;
//   });

//   var log = (function(n) {
//     return Math.log(n);
//   });

//   var secretFunctionTime = (function() {
//     console.log(topSecret + ", can't call this from outside");
//   });

//   return {
//     factorial: factorial,
//     square: square,
//     log: log
//   }
// })();

// (function(){


  var SweetSelector = (function(){

    var select = (function(s){
      var q = s[0];
      if (q === "#"){
        return document.getElementById(s.slice(1));
      }
      else if (q === ".") {
        return document.getElementsByClassName(s.slice(1));
      }
      else {
        return document.getElementsByTagName(s);
      }

    });



    return {
      select: select,
    }
  })();

// })();

