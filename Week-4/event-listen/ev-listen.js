// JavaScript

const div = document.querySelector("#myDiv");

div.style.backgroundColor = "white";
div.style.border = "3px solid black";
div.style.width = "500px";
div.style.height = "1000px";

function changeBackgroundBlack() {
    div.style.backgroundColor = "black";
}
div.addEventListener("DOMContentLoaded", changeBackgroundBlack());

window.addEventListener("scroll", () => {
    div.style.backgroundColor = "purple";
    const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (scrolled === scrollable) {
        alert("Bottom of page");
    }
});

/*
div.addEventListener("click", (e) => {
    console.log("You clicked");
    div.style.backgroundColor = "orange";
});
*/

div.addEventListener("mousedown", (e) => {
    console.log("Your holding mouse down");
    div.style.backgroundColor = "yellow";
});

div.addEventListener("mouseup", (e) => {
    console.log("You let go of mouse click");
    div.style.backgroundColor = "blue";
});

div.addEventListener("dblclick", (e) => {
    console.log("You double Clicked ");
    div.style.backgroundColor = "red";
});

div.addEventListener("mouseover", (e) => {
    console.log("You entered mouse over square");
    div.style.backgroundColor = "green";
});

div.addEventListener("mouseleave", (e) => {
    console.log("Your mouse left square");
    div.style.backgroundColor = "white";
});

document.addEventListener("keydown", function (event) {
    if (event.code == "KeyB") {
        block.style.backgroundColor = "blue";
    } else if (event.code == "KeyR") {
        block.style.backgroundColor = "red";
    } else if (event.code == "KeyG") {
        block.style.backgroundColor = "green";
    } else if (event.code == "KeyY") {
        block.style.backgroundColor = "yellow";
    } else if (event.code == "KeyP") {
        block.style.backgroundColor = "purple";
    } else {
        console.log("Why doesn't this work???");
    }
});

/*
document.addEventListener("keydown", function (event) {
    console.log(event);

    document.body.innerHTML = `
      &nbsp;&nbsp;&nbsp;
      <b>which: ${event.which}</b>
      <br>&nbsp;
      <b>keyCode:</b> ${event.keyCode}
      <br>&nbsp;&nbsp;&nbsp;
      <b>shiftKey:</b> ${event.shiftKey}
      </br>&nbsp;&nbsp;&nbsp;&nbsp;
      <b>altKey:</b> ${event.altKey}
      <br>&nbsp;&nbsp;&nbsp;
      <b>ctrlKey:</b> ${event.ctrlKey}
      <br>&nbsp;&nbsp;
      <b>metaKey:</b> ${event.metaKey}
      <br>&nbsp;&nbsp;
      <b>key:</b> ${event.key}
    `;
});

*/
