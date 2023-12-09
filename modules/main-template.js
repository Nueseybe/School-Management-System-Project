import mainTemplate from '../templates/main-template.js';
import content from './content.js';

function init() {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.innerHTML = mainTemplate();
}

function addNavbarMenu(content){
    getElementNavbar().innerHTML = content;
}
function addSidebarMenu(content){
    getElementSideBar().innerHTML = content;
}
function addUserInfo(content){
    getElementUserInfo().innerHTML = content;
}
function addFooter(content){
    getElementFooter().innerHTML = content;
}

function addEventListenerSideBar() {
    const sidemenuEvent = document.getElementById("sidemenu-event");

    if (sidemenuEvent) {
        const liElements = sidemenuEvent.querySelectorAll("li");
        liElements.forEach(function (liElement) {
            liElement.addEventListener('click', function (event) {
                const clickedId = liElement.id;
                window.location.hash = clickedId;
                console.log(clickedId)
                switch (clickedId) {
                    case 'web-engineering':
                        content.webEngineeringPage();
                        break;
                    case 'aws-cloud':
                        content.awsCloudPage();
                        break;
                    case 'python':
                        content.pythonPage();
                        break;
                    case 'data-science':
                        content.dataSciencePage();
                        break;
                    default:
                        content.notFoundPage();
                }
            });
        });
    } else {
    }
}

function addEventListenerNavBar() {
    getElementNavbar().addEventListener('click', function (event) {
        switch (event.target.nodeName) {
            case 'teachers':
                content.teachersPage();
                break;
            case 'students':
                content.studentsPage();
                break;
            case 'classes':
                content.classesPage();
                break;
            default:
                content.notFoundPage();
        }
    });
}

function getElementNavbar(){
    return document.querySelector('#navbar-menu');
}

function getElementSideBar(){
    return document.querySelector('#sidebar-menu');
}

function getElementUserInfo(){
    return document.querySelector('#user-info');
}

function getElementFooter(){
    return document.querySelector('#footer');
}

export default {
    init,
    addNavbarMenu,
    addSidebarMenu,
    addUserInfo,
    addFooter,
    addEventListenerSideBar,
    addEventListenerNavBar
}
