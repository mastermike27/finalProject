/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navigation = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const link = document.querySelectorAll('.navbar_menu a');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuildBar = () => {

    let navUI = '';
  
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
  
   navigation.innerHTML = navUI;



};

navBuildBar();

 const offset =  function isInViewport (section) {
    return Math.floor( section.getBoundingClientRect().top);
    
 };

const removeActive =(section) => {
    section.classList.remove("your-active-class");
    section.style.backgroundColor = "black";
};
const addActive = (conditional, section) => {
    if(conditional){ section.classList.add("your-active-class");
    section.style.backgroundColor = "white";
};
}
    
function sectionActivation() {
    sections.forEach(sections => {
        const elementOffset = offset(sections);
        isInViewport = () => elementOffset < 100 && elementOffset >= -100;
        removeActive(sections);
        addActive(isInViewport(), sections);

    });
};



window.addEventListener('scroll', sectionActivation);
// In this one I am trying to target the id and pass it in to control the scrolling. 
// const smoothScroll = document.getElementById('navbar_list').addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = e.target;
//     if (target.classList.contains('landing_container')) {
//         const id = target.getAttribute.sections;
//         document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
//     };
// });

// This one I am using the same code I used to create the navUI in order to add the smooth scrolling it.
// nav.addEventListener('click', "scroll", (e) => {
//         smoothScroll(e);
//     });
// smoothScroll(e);{
// if(e.target.nodeName === "A"){
//     let sectionScroll = e.target.getAttribute('data-id');
//     let landingContainer = document.getElementById(sectionID);
//     landingContainer.scrollIntoView({ behavior: "smooth"});
// };
// };

//This one I am trying to target the href like I saw on the w3 page and then using code from my previous work  
// to add the scroll
// const smoothScroll = () => {
//     document.querySelectorAll(".menu__link").forEach((anchor) => {
//         anchor.addEventListener('click', function(e){
//             e.preventDefault();
//             document.querySelector(anchor.getAttribute("href")).scrollIntoView({ behavior: 'smooth' });
        
//         });
//     });
// }
