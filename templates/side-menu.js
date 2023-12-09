export default function template(){
    return ` 
        <img src="./images/logo.png" alt="" class="logo">
        <hr>
        <span class="fs-4">Courses</span>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto" id="sidemenu-event">
            <li class="nav-item" id="web-engineering">
                <a href="#" class="nav-link link-body-emphasis">
                    Web Engineering
                </a>
            </li>
            <li id="aws-cloud">
                <a href="#" class="nav-link link-body-emphasis">
                    AWS Cloud
                </a>
            </li>
            <li id="python">
                <a href="#" class="nav-link link-body-emphasis">
                    Python
                </a>
            </li>
            <li id="data-science">
                <a href="#" class="nav-link link-body-emphasis">
                    Data Science
                </a>
            </li>
        </ul>
    `;
}
