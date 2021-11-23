"use strict";

function A() {
    let V;
    function B() {
        console.log("B");
    }

    console.log("A");
    B();

}

//console.log(V);
A();
