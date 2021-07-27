import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}
// orrrrrrr
// function Tickler() {
//   return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;
// } 

export default Tickler;
