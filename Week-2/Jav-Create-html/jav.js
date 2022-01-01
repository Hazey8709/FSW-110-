// Javascript

var nav = document.createElement("navbar");
var navUl = document.createElement("ul");

//First Link
var firstItem = document.createElement("li");
var firstLink = document.createElement("a");
firstLink.href = "#";
firstLink.textContent = "Home";
firstItem.appendChild(firstLink);
navUl.appendChild(firstItem);
nav.appendChild(navUl);
document.body.append(nav);

var secondItem = document.createElement("li");
var secondLink = document.createElement("a");
secondLink.href = "#";
secondLink.textContent = "About";
secondItem.appendChild(secondLink);
navUl.appendChild(secondItem);
nav.appendChild(navUl);
document.body.append(nav);

var thirdItem = document.createElement("li");
var thirdLink = document.createElement("a");
thirdLink.href = "#";
thirdLink.textContent = "Contact";
thirdItem.appendChild(thirdLink);
navUl.appendChild(thirdItem);

nav.appendChild(navUl);
document.body.append(nav);

var firstH1 = document.createElement("h1");
var underline = document.createElement("u");
underline.innerText = "This is my JavaScript Web Site";
firstH1.append(underline);
document.body.append(firstH1);

var firstP = document.createElement("p");
firstP.innerText =
    "It takes a lot of work and time to learn javascript. Study study and keep at it! After all the hard work it will pay off";
document.body.append(firstP);

var myOl = document.createElement("ol");
var underline = document.createElement("u");
underline.innerText = "List of Kali OS";
var firstLi = document.createElement("li");
firstLi.innerText = "Kali Linux";
myOl.append(underline);
myOl.append(firstLi);

var secondLi = document.createElement("li");
secondLi.innerText = "Kali Nethunter";
myOl.append(secondLi);

var thirdLi = document.createElement("li");
thirdLi.innerText = "Backbox Linux";
myOl.append(thirdLi);

document.body.append(myOl);

// A footer

var feet = document.createElement("footer");
feet.innerText = "This is my Footer for my page.";
myOl.append(feet);

document.body.append(myOl);
