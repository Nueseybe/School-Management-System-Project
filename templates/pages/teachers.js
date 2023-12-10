export default function template(teacher){
    return `
        <div class="card content-column-body m-4" style="width: 18rem;">
            <div class="card-body ">
            <h4 class="card-title">${teacher.name}</h4>
            <p class="card-text">${teacher.department}</p>
            <a href="#" class="btn btn-primary">Edit</a>
            </div>
        </div>
    `
}