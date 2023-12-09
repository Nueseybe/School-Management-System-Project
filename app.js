import mainTemplate from './modules/main-template.js';
import navbarMenu from './modules/navbar-menu.js';
import sideMenu from './modules/side-menu.js';
import footer from './modules/footer.js'

const acs ={};
acs.init = () =>{
    mainTemplate.init();
    mainTemplate.addNavbarMenu(navbarMenu.render());
    mainTemplate.addSidebarMenu(sideMenu.render());
    mainTemplate.addFooter(footer.render());
    mainTemplate.addEventListenerSideBar(),
    mainTemplate.addEventListenerNavBar()
}

acs.init()