const body = document.querySelector("body")
function createNavbar() {
    body.innerHTML+=`<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
        <div class="collapse navbar-collapse justify-content-md-center">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">CLASSES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">TEACHERS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">STUDENTS</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    `
}

function createSidebar() {
    body.innerHTML+=
        `<div class="container-fluid" >
     <main class="d-flex flex-nowrap">
         <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
             <img src="./images/logo.png" alt="" class="logo">
             <hr>
             <span class="fs-4">Courses</span>
             <hr>
             <ul class="nav nav-pills flex-column mb-auto">
                 <li class="nav-item">
                     <a href="#" class="nav-link link-body-emphasis">
                         Web Engineering
                     </a>
                 </li>
                 <li>
                     <a href="#" class="nav-link link-body-emphasis">
                         AWS Cloud
                     </a>
                 </li>
                 <li>
                     <a href="#" class="nav-link link-body-emphasis">
                         Python
                     </a>
                 </li>
                 <li>
                     <a href="#" class="nav-link link-body-emphasis">
                         Data Science
                     </a>
                 </li>
             </ul>

         </div>
     </main>
 </div> `
}

function createFooter() {
    body.innerHTML+=
    `
    <div class="container-fluid">
        <footer class="d-flex flex-wrap justify-content-center align-items-center py-3 my-3 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <span class="mb-4 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
            </div>

            <ul class="nav col-md-3 justify-content-end list-unstyled d-flex">
                <li class="ms-2"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#linkedin" />
                        </svg></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#instagram" />
                        </svg></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#facebook" />
                        </svg></a></li>
            </ul>
        </footer>
    </div>
    `
}

export {createNavbar, createSidebar, createFooter}