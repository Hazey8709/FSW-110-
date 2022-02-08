// make the box disappear when the user clicks it

document.getElementById("demo").onclick = function () {
    myFunction();
};

function myFunction() {
    document.getElementById("demo").style.display = "none";
}
