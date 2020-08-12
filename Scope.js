"use strict";
// Scope
var batman = "Level One";
console.log(batman);
function superman() {
    var spiderman = "Level two";
    console.log(spiderman);
    function ironman() {
        var hulk = "Level Three";
        console.log(hulk);
    }
    ironman();
}
superman();
