export default function template(clsName){
      return `
         <div class="row mt-5 content-column-body" id="tab">
             
             <nav>
                 <div class="nav nav-tabs" id="nav-tab" role="tablist">
                 <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-html" type="button" role="tab" aria-controls="course-name" aria-selected="true">${clsName.name}</button>
                 <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-css" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"></button>
                 <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-js" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"></button>
                 
                 </div>
             </nav>
             <div class="tab-content" id="nav-tabContent">
                 <div class="tab-pane fade show active" id="nav-html" role="tabpanel" aria-labelledby="nav-html-tab" tabindex="0">HTML</div>
                 <div class="tab-pane fade" id="nav-css" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">CSS</div>
                 <div class="tab-pane fade" id="nav-js" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">JavaScript</div>
             </div>
         </div>
     
 `
 
}