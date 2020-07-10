const menuDropdown = function () {
    let menuDiv = document.createElement("div");
    menuDiv.id = "menuDiv";
    menuDiv.style.backgroundColor = "rgba(67, 28, 11, .85)";

    menuDiv.style.margin = "auto";
    menuDiv.style.marginTop = "10px";
    menuDiv.style.position = "static";
    menuDiv.style.width = "93%";
    menuDiv.style.paddingTop = "10px";
    menuDiv.style.paddingBottom = "1px";
    menuDiv.style.paddingRight = "30px";
    menuDiv.style.paddingLeft = "30px";

    let menuHeader = document.createElement("header");
    menuHeader.innerHTML = "Our Menu";
    menuHeader.style.color = "white";
    menuHeader.style.fontSize = "30px";
    menuHeader.style.borderBottom = "1px solid white";
    menuHeader.style.paddingBottom = "16px";

    let menuContent = document.createElement("p");
    menuContent.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br><br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
    menuContent.style.color = "white";
    menuContent.style.fontSize = "20px";

    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuContent);
    document.getElementById("content").appendChild(menuDiv);
}

export default menuDropdown;