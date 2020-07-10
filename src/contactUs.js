const contactUsDropdown = function () {
    let contactUsDiv = document.createElement("div");
    contactUsDiv.id = "contactUsDiv";
    contactUsDiv.style.backgroundColor = "rgba(67, 28, 11, .85)";

    contactUsDiv.style.margin = "auto";
    contactUsDiv.style.marginTop = "10px";
    contactUsDiv.style.position = "static";
    contactUsDiv.style.width = "93%";
    contactUsDiv.style.paddingTop = "10px";
    contactUsDiv.style.paddingBottom = "1px";
    contactUsDiv.style.paddingRight = "30px";
    contactUsDiv.style.paddingLeft = "30px";

    let contactUsHeader = document.createElement("header");
    contactUsHeader.innerHTML = "Contact Us";
    contactUsHeader.style.color = "white";
    contactUsHeader.style.fontSize = "30px";
    contactUsHeader.style.borderBottom = "1px solid white";
    contactUsHeader.style.paddingBottom = "16px";

    let contactUsContent = document.createElement("p");
    contactUsContent.innerHTML = "Telephone:<br>252-555-5555<br><br><br>Email:<br>example@example.com<br><br><br>Address:<br>1200 W Eleventh St<br>Traverse City, MI 49684";
    contactUsContent.style.textAlign = "right";
    contactUsContent.style.color = "white";
    contactUsContent.style.fontSize = "20px";

    contactUsDiv.appendChild(contactUsHeader);
    contactUsDiv.appendChild(contactUsContent);
    document.getElementById("content").appendChild(contactUsDiv);
}

export default contactUsDropdown;