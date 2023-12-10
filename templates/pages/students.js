export default function template (student){
    return `
        <div class="card content-column-body m-4" style="width: 18rem;">
            <div class="card-body ">
                <h4 class="card-title" id="student-name">${student.name}</h4>
                    <h5 class="card-text" id="student-class">${student.class}</h5>
                    <p class="card-text" id="student-info">${student.info}</p>
                        <p class="card-text" id="student-grade">Average Grade:</p>
                <a href="#" class="btn btn-primary" id="edit-student">Edit</a>
            </div>
        </div>    
    `
}