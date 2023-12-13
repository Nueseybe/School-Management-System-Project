
export default function template(course){
   
    return `
     <div class="row">
         <div class="col-sm-6 mb-3 mb-sm-0">
             <div class="card content-column-body m-4" style="width: 18rem;">
                 <h4 class="card-title">${course.className}</h4>
                     ${course.details.map((detail) => `
                         <p class="card-text">Course Name: ${detail.courseName}</p>
                         <p class="card-text">Time: ${detail.time}</p>
                         <p class="card-text">Information: ${detail.information}</p>
                     `).join('')}
                 </div>    
             </div>
         </div>
     </div>    
 `
}

