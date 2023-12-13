export default function template(teacher){
      return `
        <div class="card content-column-body m-4" style="width: 18rem;">
          <div class="card-body " id="teacherForm">
              <h4 class="card-title">Add Teacher</h4>
              <form>
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" >
                </div>
                <div class="mb-3">
                    <label class="form-label">Department</label>
                    <input type="text" class="form-control" id="class" >
                </div>
                <div class="mb-3">
                  <label class="form-label">Info</label>
                  <input type="text" class="form-control" id="info" >
                </div>
              </form>
  
              <a href="#" class="btn btn-primary" id="saveBtn">Save</a>
          </div>
      </div> 
      `
  }
  
  