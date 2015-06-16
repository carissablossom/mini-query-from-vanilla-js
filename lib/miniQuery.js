/*!
 * miniQuery lib code
 */

var SweetSelector = (function(){

  var select = (function(string){

    if(string.search('#') === 0){
      var id = string.slice(1);
      return document.getElementById(id);
    }

    else if(string.search('.') === 0){
      var crass = string.slice(1);
      return document.getElementsByClassName(crass);
    }

    else {
      // this shit doesn't work :<
      // return document.getElementsByTagName(string);
    };

  });

  return {
    select: select
  }
})();


var DOM = (function() {

  var hide = (function(string){

    if(string.search('#') === 0){
      var id = string.slice(1);
      document.getElementById(id).style.display = 'none';
    }

    else {
      // should be using SweetSelector to do lines 43 and 44
      var crass = string.slice(1);
      var crass = document.getElementsByClassName(crass);
      for(var i = 0; i < crass.length; i++){
        crass[i].style.display = 'none';
      }
    }
  });

  return {
    hide: hide
  }
})();













