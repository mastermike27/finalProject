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
const navigationBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');





const navBarBuilder=() => {
  
    
  for(let i = 0; i < sections.length; i++) {
    const menuList = document.createElement('li');
    const secListId = sections[i].getAttribute('data-nav');
    const navData =sections[i].getAttribute('id');
    menuList.innerHTML= `<a class="menu__link" href="#${secListId}">${navData}</a>`;
    
    navigationBar.appendChild(menuList);

    };
};
  

navBarBuilder();

// function removeActive(section) {
//     // removing the section from the class list
//     section.classList.remove("your-active-class");
//     //changing the color to black when not active in the viewport
//     section.style.backgroundColor = "black";
// }
// //making the the section active when it shows up in the view port setting the const
// const addActive = (conditional, section) => {
//     //if statement for setting the class active and adding to the classlist
//     if(conditional){ section.classList.add("your-active-class");
//     //changing the color to indicate the section is currently active in the viewport
//     section.style.backgroundColor = "yellow";
// };
// };

function isInViewport(view) {
    const rect = view.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
sectionActivation =()=> {
    sections.forEach(section => {
        let classList = section.classList;
               if (isInViewport(section)){
            section.classList.add("your-active-class");
let activeView = document.getElementsByClassName(classList);
         section.style.backgroundColor ="black";

            }else{
            section.classList.remove("your-active-class");
            section.style.backgroundColor = "blue";
        }
     });
            
    };
//removing the active status when it is no longer in the view port, defining the const
// function removeActive(section) {
//     // removing the section from the class list
//     section.classList.remove("your-active-class");
//     //changing the color to black when not active in the viewport
//     section.style.backgroundColor = "black";
// }
// //making the the section active when it shows up in the view port setting the const
// const addActive = (conditional, section) => {
//     //if statement for setting the class active and adding to the classlist
//     if(conditional){ section.classList.add("your-active-class");
//     //changing the color to indicate the section is currently active in the viewport
//     section.style.backgroundColor = "yellow";
// };
// };

// sectionActivation =()=> {
//     sections.forEach(section => {
//                if (isInViewport(section)){
//             section.classList.add("your-active-class");

//             }else{
//             section.classList.remove("your-active-class");
//         }
//      });
            
//     };

// addActive(isInViewport(), sections);

 // this function is the loop for the sections activation   
// function sectionActivation() {
//     sections.forEach(sections => {

//     //setting the constant for offset number for the add active 
//         const elementOffset = offset(sections);
//         // this is setup to set the actual value to passed later into the addActive 
//         isInViewport = () => elementOffset < 100 && elementOffset >= -100;
//         //this removes the section once it is outside of the above parameters
//         removeActive(sections);
//         // this uses the previous defined parameters to add a section to the viewport
//         addActive(isInViewport(), sections);

//     });
// };

//adding listeners for the scroll feature and the activation functions

window.addEventListener("click", sectionActivation);
window.addEventListener('scroll', sectionActivation);

                    //Below are attempts at adding the scroll via javascript//


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

