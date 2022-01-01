// Javascript   Array Into Visual List

var firstH1 = document.createElement("h1");
var sub = document.createElement("sub");
sub.innerText = "Hello World";
firstH1.append(sub);
firstH1.style.fontSize = "30px";
firstH1.style.textShadow = "10px 10px 30px";
firstH1.style.textAlign = "center";
firstH1.style.color = "red";
firstH1.style.border = "dotted";
firstH1.style.borderColor = "green";
firstH1.style.backgroundColor = "yellow";

document.body.append(firstH1);

for (i = 0; i <= 8; i++) {
    var multH1 = document.createElement("h1");
    multH1.innerHTML = "<sup><hr><ins>Hello World</ins></hr></sup>";
    multH1.style.color = "darkblue";
    multH1.style.fontSize = "20px";
    multH1.style.textShadow = "10px 10px 50px";
    document.body.append(multH1);
}

var friends = [
    "Steve",
    "Larry",
    "Joe",
    "Shirley",
    "Steph",
    "Nate",
    "Rick",
    "Emily",
];

var friendsList = document.createElement("ul");

for (var i = 0; i < friends.length; i++) {
    friendsList.innerHTML += "<li>" + friends[i] + "</li>";
}
document.body.append(friendsList);

friendsList.style.color = "purple";
friendsList.style.fontSize = "30px";
friendsList.style.backgroundColor = "lightblue";
friendsList.style.border = "solid";
friendsList.style.borderColor = "black";
friendsList.style.textAlign = "center";
friendsList.style.textShadow = "50px 50px 50px";
