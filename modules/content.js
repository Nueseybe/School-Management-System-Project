import webEngineeringPageTemplate from "../templates/pages/web-engineering.js";
import dataSciencePageTemplate from "../templates/pages/data-sience.js";
import pythonPageTemplate from "../templates/pages/python.js";
import awsCloudPageTemplate from "../templates/pages/aws-cloud.js";
import teachersPageTemplate from "../templates/pages/teachers.js";
import studentsPageTemplate from "../templates/pages/students.js";
import classesPageTemplate from "../templates/pages/classes.js";
import homePageTemplate from "../templates/pages/home.js";

function webEngineeringPage(){
    render(webEngineeringPageTemplate());
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
    render(teachersPageTemplate());
}

function studentsPage(){
    render(studentsPageTemplate());
}

function classesPage(){
    render(classesPageTemplate());
}

function render(content){
    document.getElementById('content').innerHTML = content;
}

function homePage(){
    render(homePageTemplate());
}

export default {
    webEngineeringPage,
    dataSciencePage,
    awsCloudPage,
    pythonPage,
    teachersPage,
    studentsPage,
    classesPage,
    homePage
}
