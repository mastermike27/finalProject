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
//variables to get the information from the nav and sections 
const navigationBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');




//building out the navigation functions
const navBarBuilder=() => {
  
 //for loop to create sections from html elements  
  for(let i = 0; i < sections.length; i++) {
      //creating the li element to append the nav too
    const menuList = document.createElement('li');
    //getting id and data nav information to pass into the menulist inner html
    const secListId = sections[i].getAttribute('id');
    const navData =sections[i].getAttribute('data-nav');
    menuList.innerHTML= `<a class="menu__link" href="#${secListId}">${navData}</a>`;
    //appending the li, menulist to the navigation bar
    navigationBar.appendChild(menuList);

    };
};
  
//build navigation bar
navBarBuilder();

// function to get the position in the view port
// this code is pulled from open source not another students work //////////////////////////////////
//referred from javascripttutorial.net https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(view) {
    const rect = view.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
//function to activate or apply or remove the active class depending on position
sectionActivation =()=> {
    sections.forEach(section => {
        let classList = section.classList;
               if (isInViewport(section)){
            section.classList.add("your-active-class");
//'changing color of the class when active in view port
        section.style.backgroundColor ="black";

            }else{
            section.classList.remove("your-active-class");
            //setting color for when not i the view port
            section.style.backgroundColor = "blue";
        }
     });
            
    };
    // extra code for if I need to create smooth scroll in javascript
    // document.querySelectorAll('a[href^="#section1"]').forEach(anchor => {
    // anchor.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     // document.querySelector(this.getAttribute('href')).scrollIntoView({
    //     //     behavior: 'smooth'
    //     });
    // });

//listener for the scroll and section activation functions
window.addEventListener('scroll', sectionActivation);

                    

