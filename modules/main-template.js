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
function addMain(content){
    getElementMain().innerHTML = content;
}
function addEventListenerSideBar() {
    const sidemenuEvent = document.getElementById("sidemenu-event");
    if (sidemenuEvent) {
        const liElements = sidemenuEvent.querySelectorAll("li");
        liElements.forEach(function (liElement) {
            liElement.addEventListener('click', function (event) {
                const clickedId = liElement.id;
                window.location.hash = clickedId;
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
    } 
}

function addEventListenerNavBar() {
    const navbarEvent = document.getElementById("navbar-event");
    if (navbarEvent) {
        const liElements = navbarEvent.querySelectorAll("li");
        liElements.forEach(function (liElement) {
            liElement.addEventListener('click', function (event) {
                const clickedId = liElement.id;
                window.location.hash = clickedId;
                switch (clickedId) {
                    case 'home':
                        content.homePage();
                        break;
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
        });
    } 
}

function addEventItemsToData() {
    const addEvent = document.getElementById("add-event");
    if (addEvent) {
        addEvent.addEventListener('click', function (event) {
            const hashValue = window.location.hash;
            switch (hashValue) {
                case "#students":
                    console.log("take buton")
                    openStudentsModal();        
                    break;
            }
        })
    }
}

function detailButtonOfClass() {
    const homePageClassDetail = document.querySelector("#class-detail-btn");
    homePageClassDetail.addEventListener('click', function (e) {
        content.classesPage()
    })
}
function addNewStudentsPage() {
    content.addStudentsPage();
    saveNewStudent()
}

function saveNewStudent() {
    
    const saveBtn = document.querySelector("#saveBtn");
    saveBtn.addEventListener("click", function(event){
        const form = document.getElementById("studentForm");
    
        const name = form.querySelector("#name").value;
        const studentClass = form.querySelector("#class").value;
        const info = form.querySelector("#info").value;
    
        const student = {
            name,
            class: studentClass,
            info
        };
    
        const studentsData = JSON.parse(localStorage.getItem("students")) || [];
        studentsData.push(student);
        localStorage.setItem("students", JSON.stringify(studentsData));
    
        alert("Student saved successfully!");
    });
}


function addNewTeachersPage() {
    content.addTeachersPage()
    saveNewTeacher()
}

function saveNewTeacher() {
    
    const saveBtn = document.querySelector("#saveBtn");
    saveBtn.addEventListener("click", function(event){
        const form = document.getElementById("teacherForm");
    
        const name = form.querySelector("#name").value;
        const teacherDepartment = form.querySelector("#class").value;
        const info = form.querySelector("#info").value;
    
        const teacher = {
            name,
            class: teacherDepartment,
            info
        };
    
        const teachersData = JSON.parse(localStorage.getItem("teachers")) || [];
        teachersData.push(teacher);
        localStorage.setItem("teachers", JSON.stringify(teachersData));
    
        alert("Teacher saved successfully!");
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

function getElementMain(){
    return document.querySelector('#page-info')
}

export default {
    init,
    addNavbarMenu,
    addSidebarMenu,
    addUserInfo,
    addFooter,
    addMain,
    addEventListenerSideBar,
    addEventListenerNavBar,
    addEventItemsToData,
    addNewStudentsPage,
    addNewTeachersPage,
    detailButtonOfClass,
    saveNewStudent,
    saveNewTeacher
}
