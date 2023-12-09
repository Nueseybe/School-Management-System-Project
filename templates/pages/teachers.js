export default function teachersItems(item){
    return `

    <h1> TEACHERS PAGE </h1>
    <div class="row">
        <div class="col-md-5 title">
            <h2> Welcome ${teachers.name}</h2>
        </div>
        <div class="col-md-7 d-flex align-item-end justify-content-end ">
            <div class="row">
                <img src="./images/student_icon/user-icon-07.png">
            </div>
        </div>
        <div class="row ">
            <p class="d-flex justify-content-end">${teachers.name}</p>
            <p class="d-flex justify-content-end">logout</p>
        </div>
    </div>
    <div class="card content-column-body m-5" style="width: 18rem;">
        <div class="card-body ">
        <h4 class="card-title"></h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Details</a>
        </div>
    </div>
    `
}