setTimeout(function(){alert("These are your requests for today");}, 500);
var selections = [];

var check = function() {

if (selections.length < 3) {
  window.alert("choose more!");
}

else {window.alert("enough choices!")} ;

};

var choice1 = function() {
selections.push("Food");
check();
window.alert("Food is a good choice");
    setTimeout(function(){alert(selections);}, 1000);
    (function () {
      window.alert("self invoked");
    })();

};

 var choice2 = function() {
selections.push("Cinema");
window.alert("Cinema is a good choice");
check();
    setTimeout(function(){alert(selections);}, 1000);
    //var moose;
    moose = 5;

};

var choice3 = function() {
selections.push("Golf");
window.alert("Golf is a good choice");
check();
window.alert(moose);
    setTimeout(function(){alert(selections);}, 1000);


};
