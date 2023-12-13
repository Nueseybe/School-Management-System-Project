import studentsData from '../../data/studentsData.js';
import teachersData from '../../data/teachersData.js';
import coursesData from '../../data/coursesData.js';
import classesData from '../../data/classesData.js';

let studentCount = studentsData.length;
let classCount = classesData.length;
let teacherCount= teachersData.length;
let courseCount = coursesData.length;
console.log(studentCount , teacherCount, classCount, courseCount)
export default function template(){
   
    return `
    <div class="row">
        <div class="card content-column-body m-5" style="width: 18rem;">
            <div class="card-body ">
            <h4 class="card-title">COURSES</h5>
            <p class="card-text">${courseCount}</p>
            <a href="#" class="btn btn-primary" id="course-detail-btn">Details</a>
            </div>
        </div>
        <div class="card content-column-body m-5" style="width: 18rem;">
            <div class="card-body ">
            <h4 class="card-title">TEACHERS</h5>
            <p class="card-text">${teacherCount}</p>
            <a href="#" class="btn btn-primary" id="teacher-detail-btn">Details</a>
            </div>
        </div>
    </div>
    <div class = "row">
        <div class="card content-column-body m-5" style="width: 18rem;">
            <div class="card-body ">
            <h4 class="card-title">STUDENTS</h5>
            <p class="card-text">${studentCount}</p>
            <a href="#" class="btn btn-primary" id="student-detail-btn">Details</a>
            </div>
        </div>
        <div class="card content-column-body m-5" style="width: 18rem;">
            <div class="card-body ">
            <h4 class="card-title">CLASSES</h5>
            <p class="card-text">${classCount}</p>
            <a class="btn btn-primary" id="class-detail-btn">Details</a>
            </div>
        </div>
    </div>
    `
}
