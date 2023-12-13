export default function template (student){
    const aveGrade = calculateAveGrade(student.courses);
    return `
        <div class="card content-column-body m-4" style="width: 18rem;">
            <div class="card-body ">
                <h4 class="card-title" id="student-name">${student.name}</h4>
                    <h5 class="card-text" id="student-class">${student.class}</h5>
                    <p class="card-text" id="student-info">${student.info}</p>
                        <p class="card-text" id="student-grade">Average Grade: ${aveGrade} </p>
                <a href="#" class="btn btn-primary" data-student-id="${student.id}" id="edit-student">Edit</a>
            </div>
        </div>    
    `
}

function calculateAveGrade(courses){
    if(courses){
        const totalGrade = courses.reduce(
            (sum, course)=> sum+course.grade,0
        )
        const aveGrade=totalGrade/courses.length;
        return aveGrade.toFixed(2);
    }
}