// Scope Identifiers
// see outside from inside
// the boundary between outside and inside = curly bracket {}
// batman, superman1 , superman2 = the outmoust level
// spiderman, ironman = the next level
// hulk = the innermost level
// the same two identifiers can not reside in the same level.
// the value of an identifier can be set/changed at the same or inner level.
// the order of process: when and where ?

let batman = "Level One";
console.log(batman);

const superman1 = "Flying";

function superman2() {
  let spiderman = "Level two";
  console.log(spiderman);

  function ironman() {
    let hulk = "Level Three";
    console.log(hulk);
  }
  ironman();
}
superman2();
