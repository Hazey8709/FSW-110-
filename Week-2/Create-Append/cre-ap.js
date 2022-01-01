// javascript adding & appending DOM

const h1 = document.createElement("h1");
h1.innerText = "Welcome to my JS site";
document.body.append(h1);

const p = document.createElement("p");
p.innerText = "All of this was created with JavaScript";
document.body.append(p);

const myOl = document.createElement("ol");
const underline = document.createElement("u");
underline.innerText = "Ordered List";
const firstLi = document.createElement("li");
firstLi.innerText = "Kali Linux";
myOl.append(underline);
myOl.append(firstLi);

const secondLi = document.createElement("li");
secondLi.innerText = "Kali Nethunter";
myOl.append(secondLi);

const thirdLi = document.createElement("li");
thirdLi.innerText = "Backbox Linux";
myOl.append(thirdLi);

document.body.append(myOl);
