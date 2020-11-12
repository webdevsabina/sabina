// =================================================================================
// THEME INITIALIZATION
// =================================================================================
let theme = localStorage.getItem("THEME");
if (theme != "LIGHT_THEME" && theme != "DARK_THEME") {
    localStorage.setItem("THEME", "LIGHT_THEME");
}
// =================================================================================
// =================================================================================
let section = document.getElementById('bubbles');
// =================================================================================
const container = document.getElementById('container');
const logo = document.getElementById('logo');
const nameImg = document.getElementById('name_img');
const setLightTheme = () => {
    localStorage.setItem("THEME", "LIGHT_THEME");
    logo.src = "img/logo-black.png";
    nameImg.src = "img/name-black.png";
    document.getElementsByTagName("body")[0].style.background = "#dcdcdc";
    container.classList.remove('dark_theme');
    container.classList.add('light_theme');
    section.classList.remove('dark_theme');
    section.classList.add('light_theme');
}
const setDarkTheme = () => {
    localStorage.setItem("THEME", "DARK_THEME");
    logo.src = "img/logo-white.png";
    nameImg.src = "img/name-white.png";
    document.getElementsByTagName("body")[0].style.background = "darkslategray";
    container.classList.remove('light_theme');
    container.classList.add('dark_theme');
    section.classList.remove('light_theme');
    section.classList.add('dark_theme');
}
if (theme === "LIGHT_THEME") {
    setLightTheme();
} else {
    setDarkTheme();
}
// ===================================================================================
// ===================================================================================

const aboutMeBtn = document.getElementById('about_me_btn');
const backgroundBtn = document.getElementById('background_btn');
const projectsBtn = document.getElementById('projects_btn');
const contactMeBtn = document.getElementById('contact_me_btn');
const aboutMeContent = document.getElementById('about_me_content');
const backgroundContent = document.getElementById('background_content');
const projectsContent = document.getElementById('projects_content');
const contactMeContent = document.getElementById('contact_me_content');
const aboutMeAction = () => {
    removeBtnClasses();
    removeAllContent();
    aboutMeBtn.classList.add('active_btn');
    aboutMeContent.style.display = 'flex';
}
const backgroundAction = () => {
    removeBtnClasses();
    removeAllContent();
    backgroundBtn.classList.add('active_btn');
    backgroundContent.style.display = 'flex';

}
const projectsAction = () => {
    removeBtnClasses();
    removeAllContent();
    projectsBtn.classList.add('active_btn');
    projectsContent.style.display = 'flex';
}
const contactMeAction = () => {
    removeBtnClasses();
    removeAllContent();
    contactMeBtn.classList.add('active_btn');
    contactMeContent.style.display = 'flex';
}
const removeBtnClasses = () => {
    aboutMeBtn.classList.remove('active_btn');
    backgroundBtn.classList.remove('active_btn');
    projectsBtn.classList.remove('active_btn');
    contactMeBtn.classList.remove('active_btn');
}
const removeAllContent = () => {
    aboutMeContent.style.display = 'none';
    backgroundContent.style.display = 'none';
    projectsContent.style.display = 'none';
    contactMeContent.style.display = 'none';
}