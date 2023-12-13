import webEngineeringPageTemplate from "../templates/pages/web-engineering.js";
import dataSciencePageTemplate from "../templates/pages/data-sience.js";
import pythonPageTemplate from "../templates/pages/python.js";
import awsCloudPageTemplate from "../templates/pages/aws-cloud.js";
import teachersPageTemplate from "../templates/pages/teachers.js";
import studentsPageTemplate from "../templates/pages/students.js";
import classesPageTemplate from "../templates/pages/classes.js";
import homePageTemplate from "../templates/pages/home.js";
import userInfoPageTemplate from "../templates/user-info.js";
import addStudentsPageTemplate from "../templates/add-student.js";
import addTeachersPageTemplate from "../templates/add-teacher.js";
import classesData from "../data/classesData.js";
import studentsData from "../data/studentsData.js";
import teachersData from "../data/teachersData.js";
import coursesData from "../data/coursesData.js";

function webEngineeringPage() {
    const webEngineeringTemplate = coursesData
        .map((webEngineer) => webEngineeringPageTemplate(webEngineer)).join("")
    render(webEngineeringTemplate)
}

function dataSciencePage() {
    const dataScienceTemplate = coursesData
        .map((clsName) => dataSciencePageTemplate(clsName)).join("")
    render(dataScienceTemplate);
}

function awsCloudPage() {
    render(awsCloudPageTemplate());
}

function pythonPage() {
    render(pythonPageTemplate());
}

function teachersPage() {
    const teacherTemplate = teachersData
        .map((teacher) => teachersPageTemplate(teacher)).join("");
    render(teacherTemplate)
}

function studentsPage() {
    const studentTemplate = studentsData
        .map((student) => studentsPageTemplate(student)).join("");
    render(studentTemplate);
}

function classesPage() {
    const classTemplate = classesData
        .map((cls) => classesPageTemplate(cls)).join("");
    render(classTemplate);
}

function homePage() {
    render(homePageTemplate());
}

function userInfoPage() {
    render(userInfoPageTemplate());
}

function addStudentsPage() {
    render(addStudentsPageTemplate());
}

function addTeachersPage() {
    render(addTeachersPageTemplate());
}

function render(content) {
    document.getElementById('page-info').innerHTML = content;
}

export default {
    webEngineeringPage,
    dataSciencePage,
    awsCloudPage,
    pythonPage,
    teachersPage,
    studentsPage,
    classesPage,
    homePage,
    userInfoPage,
    addStudentsPage,
    addTeachersPage
}
