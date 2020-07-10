

import './layout';
import menuDropdown from './menu';
import aboutUsDropdown from './aboutUs';
import contactUsDropdown from './contactUs';

let initialized = 'none';

const menuSetInit = function() {
    console.log(initialized);
    setTimeout(() => {initialized = 'menu';}, 1);
};

const aboutUsSetInit = function() {
    console.log(initialized);
    setTimeout(() => {initialized = 'aboutUs';}, 1);
};

const contactUsSetInit = function() {
    console.log(initialized);
    setTimeout(() => {initialized = 'contactUs';}, 1);
};

const removePreviousDropdown = function() {
    if (initialized == 'menu') {
        document.getElementById('content').removeChild(document.getElementById("menuDiv"));
    } else if (initialized == 'aboutUs') {
        document.getElementById('content').removeChild(document.getElementById("aboutUsDiv"));
    } else if (initialized == 'contactUs') {
        document.getElementById('content').removeChild(document.getElementById("contactUsDiv"));
    }
};

document.getElementById("menu").addEventListener("click", removePreviousDropdown);
document.getElementById("menu").addEventListener("click", menuDropdown);
document.getElementById("menu").addEventListener("click", menuSetInit);

document.getElementById("aboutUs").addEventListener("click", removePreviousDropdown);
document.getElementById("aboutUs").addEventListener("click", aboutUsDropdown);
document.getElementById("aboutUs").addEventListener("click", aboutUsSetInit);

document.getElementById("contactUs").addEventListener("click", removePreviousDropdown);
document.getElementById("contactUs").addEventListener("click", contactUsDropdown);
document.getElementById("contactUs").addEventListener("click", contactUsSetInit);

//if (initialized == true) {removeMenu();}
//initialized = true;



//document.getElementById("aboutUs").addEventListener("click", aboutUsDropdown)
