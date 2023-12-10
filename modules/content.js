import webEngineeringPageTemplate from "../templates/pages/web-engineering.js";
import dataSciencePageTemplate from "../templates/pages/data-sience.js";
import pythonPageTemplate from "../templates/pages/python.js";
import awsCloudPageTemplate from "../templates/pages/aws-cloud.js";
import teachersPageTemplate from "../templates/pages/teachers.js";
import studentsPageTemplate from "../templates/pages/students.js";
import classesPageTemplate from "../templates/pages/classes.js";
import homePageTemplate from "../templates/pages/home.js";
import userInfoPageTemplate from "../templates/pages/user-info.js";
import classesData from "../data/classesData.js";
import studentsData from "../data/studentsData.js";
import teachersData from "../data/teachersData.js";
import coursesData from "../data/coursesData.js";

function webEngineeringPage(){
    const webEngineeringTemplate = coursesData
        .map((webEngineer)=>webEngineeringPageTemplate(webEngineer))
    render(webEngineeringTemplate)
}

function dataSciencePage(){
    render(dataSciencePageTemplate());
}

function awsCloudPage(){
    render(awsCloudPageTemplate());
}

function pythonPage(){
    render(pythonPageTemplate());
}

function teachersPage(){
    const teacherTemplate = teachersData
        .map((teacher)=>teachersPageTemplate(teacher)).join("");
    render(teacherTemplate)
}

function studentsPage(){
    render(studentsPageTemplate());
}

function classesPage(){
    render(classesPageTemplate());
}

function homePage(){
    render(homePageTemplate());
}

function userInfoPage(){
    render(userInfoPageTemplate());
}

function render(content){
    document.getElementById('content').innerHTML = content;
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
    userInfoPage
}
