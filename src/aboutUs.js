const aboutUsDropdown = function () {
    let aboutUsDiv = document.createElement("div");
    aboutUsDiv.id = "aboutUsDiv";
    aboutUsDiv.style.backgroundColor = "rgba(67, 28, 11, .85)";

    aboutUsDiv.style.margin = "auto";
    aboutUsDiv.style.marginTop = "10px";
    aboutUsDiv.style.position = "static";
    aboutUsDiv.style.width = "93%";
    aboutUsDiv.style.paddingTop = "10px";
    aboutUsDiv.style.paddingBottom = "1px";
    aboutUsDiv.style.paddingRight = "30px";
    aboutUsDiv.style.paddingLeft = "30px";

    let aboutUsHeader = document.createElement("header");
    aboutUsHeader.innerHTML = "About Us";
    aboutUsHeader.style.color = "white";
    aboutUsHeader.style.fontSize = "30px";
    aboutUsHeader.style.borderBottom = "1px solid white";
    aboutUsHeader.style.paddingBottom = "16px";

    let aboutUsContent = document.createElement("p");
    aboutUsContent.innerHTML = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br><br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br><br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br><br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
    aboutUsContent.style.color = "white";
    aboutUsContent.style.fontSize = "20px";

    aboutUsDiv.appendChild(aboutUsHeader);
    aboutUsDiv.appendChild(aboutUsContent);
    document.getElementById("content").appendChild(aboutUsDiv);
}

export default aboutUsDropdown;