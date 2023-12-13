import mainTemplate from './modules/main-template.js';
import navbarMenu from './modules/navbar-menu.js';
import sideMenu from './modules/side-menu.js';
import userInfo from './modules/user-info.js';
import footer from './modules/footer.js';
import home from  './modules/home.js';

const acs ={};
acs.init = () =>{
    mainTemplate.init();
    mainTemplate.addNavbarMenu(navbarMenu.render());
    mainTemplate.addSidebarMenu(sideMenu.render());
    mainTemplate.addUserInfo(userInfo.render())
    mainTemplate.addFooter(footer.render());
    mainTemplate.addMain(home.render());
    mainTemplate.addEventListenerSideBar(),
    mainTemplate.addEventListenerNavBar(),
    mainTemplate.addEventItemsToData();
    mainTemplate.saveNewStudent()
}

acs.init()