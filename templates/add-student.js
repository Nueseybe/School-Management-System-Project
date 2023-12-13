export default function template(student){
  return `
    <div class="card content-column-body m-4" style="width: 18rem;">
      <div class="card-body " id="studentForm">
          <h4 class="card-title">Add Student</h4>
         
          
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" id="name" >
            </div>
            <div class="mb-3">
                <label class="form-label">Class</label>
                <input type="text" class="form-control" id="class" >
            </div>
            <div class="mb-3">
              <label class="form-label">Info</label>
              <input type="text" class="form-control" id="info" >
            </div>
            <a class="btn btn-primary" id="saveBtn">Save</a>
        
      </div>
  </div> 
  `
}
