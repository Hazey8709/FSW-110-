// Javascript Style & Class

for (i = 0; i <= 4; i++) {
    var multH2 = document.createElement("h2");
    multH2.innerText = "Hello World";
    multH2.style.fontSize = "20px";
    multH2.style.fontWeight = "lighter";
    multH2.style.fontFamily = "sans-serif";
    multH2.style.color = "cornflowerblue";

    document.body.append(multH2);
}

var style = document.querySelectorAll("h2");
for (i = 0; i < style.length; i++) {
    style[i].classList.add("border");
}
