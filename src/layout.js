document.body.style.backgroundImage = "url('background.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundColor = "#C7C497";
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundPosition = "center";

let bottomBar = document.createElement("div");
bottomBar.style.backgroundColor = "rgba(87, 38, 21, .6)";
bottomBar.innerHTML = "<br>This site is a demo and has no affiliation with Trattoria Stella."
bottomBar.style.fontSize = "14px";
bottomBar.style.color = "white";
bottomBar.style.textAlign = "center";
bottomBar.style.margin = "auto";
bottomBar.style.position = "absolute";
bottomBar.style.width = "100%";
bottomBar.style.height = "50px";
bottomBar.style.bottom = "0px";
bottomBar.style.left = "0";

let content = document.createElement("dom");
content.id = "content";
content.style.backgroundColor = "rgba(87, 38, 21, .6)";
content.style.position = "absolute";
content.style.top = "0";
content.style.left = "0";
content.style.width = "100%";
content.style.height = "167px";

let buttonSpace = document.createElement("dom");
buttonSpace.style.display = "inline-block";
buttonSpace.style.position = "absolute";
buttonSpace.style.float = "right";
buttonSpace.style.bottom = "6px";
buttonSpace.style.right = "5px";

let logo = document.createElement("img");
logo.src = "stella_bg_small.png";
logo.style.paddingTop = "10px";
logo.style.paddingLeft = "10px";
logo.style.paddingBottom = "5px";
logo.style.backgroundColor = "transparent";

let menu = document.createElement("div");
menu.id = "menu";
menu.textContent = "Menu";
menu.style.backgroundColor = "transparent";
menu.onmouseover = function() {menu.style.backgroundColor = "rgba(67, 28, 11, .9)"; menu.style.cursor = "pointer";};
menu.onmouseleave = function() {menu.style.backgroundColor = "transparent";};
menu.onclick = function () {
    menu.style.margin = "-2px";
    menu.style.border = "2px solid white";
    aboutUs.style.margin = "0px";
    aboutUs.style.border = "none"
    contactUs.style.margin = "0px";
    contactUs.style.border = "none";
};
menu.style.borderRadius = "500px";
menu.style.border = "0";
menu.style.fontFamily = "'Raleway', sans-serif";
menu.style.color = "white";
menu.style.fontSize = "35px";
menu.style.padding = "7px 20px";
menu.style.display = "inline-block";

let aboutUs = document.createElement("div");
aboutUs.id = "aboutUs";
aboutUs.textContent = "About Us";
aboutUs.style.backgroundColor = "transparent";
aboutUs.onmouseover = function() {aboutUs.style.backgroundColor = "rgba(67, 28, 11, .9)"; aboutUs.style.cursor = "pointer";};
aboutUs.onmouseleave = function() {aboutUs.style.backgroundColor = "transparent";};
aboutUs.onclick = function () {
    aboutUs.style.margin = "-2px";
    aboutUs.style.border = "2px solid white";
    menu.style.margin = "0px";
    menu.style.border = "none"
    contactUs.style.margin = "0px";
    contactUs.style.border = "none";
};
aboutUs.style.borderRadius = "500px";
aboutUs.style.border = "0";
aboutUs.style.fontFamily = "'Raleway', sans-serif";
aboutUs.style.color = "white";
aboutUs.style.fontSize = "35px";
aboutUs.style.padding = "7px 20px";
aboutUs.style.display = "inline-block";

let contactUs = document.createElement("div");
contactUs.id = "contactUs";
contactUs.textContent = "Contact Us";
contactUs.style.backgroundColor = "transparent";
contactUs.onmouseover = function() {contactUs.style.backgroundColor = "rgba(67, 28, 11, .9)"; contactUs.style.cursor = "pointer";};
contactUs.onmouseleave = function() {contactUs.style.backgroundColor = "transparent";};
contactUs.onclick = function () {
    contactUs.style.margin = "-2px";
    contactUs.style.border = "2px solid white";
    aboutUs.style.margin = "0px";
    aboutUs.style.border = "none"
    menu.style.margin = "0px";
    menu.style.border = "none";
};
contactUs.style.borderRadius = "500px";
contactUs.style.border = "0";
contactUs.style.fontFamily = "'Raleway', sans-serif";
contactUs.style.color = "white";
contactUs.style.fontSize = "35px";
contactUs.style.padding = "7px 20px";
contactUs.style.display = "inline-block";

let span1 = document.createElement("span");
span1.style.marginRight = "8px";

let span2 = document.createElement("span");
span2.style.marginRight = "8px";

buttonSpace.appendChild(menu);
buttonSpace.appendChild(span1);
buttonSpace.appendChild(aboutUs);
buttonSpace.appendChild(span2);
buttonSpace.appendChild(contactUs);
content.appendChild(logo);
content.appendChild(buttonSpace);
document.body.appendChild(content);
document.body.appendChild(bottomBar);

export {}