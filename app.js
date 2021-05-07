let toggle = document.querySelector(".slider");
let toggletext = document.querySelector(".toggle-text");
let toggleicon = document.querySelector(".icon");
var isOn = false;

function darkMode() {
    toggletext.textContent = (["Dark Mode", "Light Mode"][+isOn]);
    toggleicon.className = (['fas icon fa-moon', 'fas icon fa-sun'][+isOn]);
    document.documentElement.setAttribute('data-theme', ['dark', 'light'][+isOn]);
    isOn = !isOn;


}
toggle.addEventListener("click", darkMode);