export default function template (student){
    return `
        <div class="card content-column-body m-4" style="width: 18rem;">
            <div class="card-body ">
                <h4 class="card-title">${student.name}</h4>
                    <p class="card-text">${student.courses}</p>
                <a href="#" class="btn btn-primary" id="edit-student">Edit</a>
            </div>
        </div>
        
    `
}