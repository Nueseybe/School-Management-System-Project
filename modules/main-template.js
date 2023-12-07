import mainTemplate from '../templates/main-template.js';
import content from './content.js';

function init() {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.innerHTML = mainTemplate();
}

// function addSideMenu(content) {
//     getElement().innerHTML = content;
// }
function addNavbarMenu(content){
    getElementNavbar().innerHTML = content;
}
function addSidebarMenu(content){
    getElementSideBar().innerHTML = content;
}


function addEventListenerSideBar() {
    getElementSideBar().addEventListener('click', function (event) {
        switch (event.target.nodeName) {
            case 'web-enginering':
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
        }
    });
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
    return document.querySelector('#sidebar-menu')
}

export default {
    init,
    addNavbarMenu,
    addSidebarMenu,
    addEventListenerSideBar,
    addEventListenerNavBar
}
