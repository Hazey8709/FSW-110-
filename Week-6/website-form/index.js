function price1() {
    document.getElementById("img1").innerHTML = "$2.99";
    if (onclick == true) {
        var x = document.getElementById("priceTotal");
    }
}

function price2() {
    document.getElementById("img2").innerHTML = "$11.99";
    if (onclick == true) {
    }
}

function price3() {
    document.getElementById("img3").innerHTML = "$1.99";
    if (onclick == true) {
    }
}

function Price1(e) {
    e.onclick();
    document.getElementById("img1").innerHTML = "Your Price";
}

function Price2(x) {
    x.onclick();
    document.getElementById("img2").innerHTML = "Your Price";
}

function Price3(y) {
    y.onclick();
    document.getElementById("img3").innerHTML = "Your Price";
}

//////////////////////////////////////////////
///////////////////Checkout Operations////////
/////////////////////////////////////////////
function target() {
    document.getElementById("priceTotal").innerHTML = "$2.99";
}

function target2() {
    document.getElementById("priceTotal").innerHTML = "$11.99";
}

function target3() {
    document.getElementById("priceTotal").innerHTML = "$1.99";
}

// modal javascript
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
