export default function template(cls){
    return `
        <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card content-column-body m-4" style="width: 18rem;">
                    <div class="card-body ">
                    <h4 class="card-title">${cls.className}</h4>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Details</a>
                    </div>    
                </div>
            </div>
        </div>
    `
}