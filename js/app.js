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
//On scroll variables removed
// const navLi = document.querySelectorAll("menu_link");


//building out the navigation functions
const navBarBuilder=() => {
  
 //for loop to create sections from html elements  
  for(let i = 0; i < sections.length; i++) {
      //creating the li element to append the nav too
    const menuList = document.createElement('li');
    
    //getting id and data nav information to pass into the menulist inner html
    const secListId = sections[i].getAttribute('id');
    const navData =sections[i].getAttribute('data-nav');
    menuList.innerHTML= `<a class="menu__link"  href="#${secListId}">${navData}</a>`;
    //appending the li, menulist to the navigation bar
    navigationBar.appendChild(menuList);
   

    };
    
};
//this is the code for the highlight tab on scroll entering the viewport//
// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= sectionTop - sectionHeight) {
//       current = section.getAttribute('href');
//     }
//   });
//   //this code is for assigning a class to li so I can target it//
// let li = document.querySelector('#section1');
// li.classList.add('home','active');
// //This code changes the current target to active after removing the previous state//
//   navLi.forEach((li) => {
//      li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
//   console.log(current);
// });
//build navigation bar
navBarBuilder();

// function to get the position in the view port
// this code is pulled from open source not another students work //////////////////////////////////
//referred from https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/ 4/30/2022 && https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport 4/25/2022
function isInViewport(view) {
    const rect = view.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
       
    );
}


// function isInViewport(view) {
//     const rect = view.getBoundingClientRect();
//      return Math.abs(rect.top >= 0 && window.innerHeight) <= rect.bottom && window.innerWidth;
    
// }
//function to activate or apply or remove the active class depending on position
sectionActivation =()=> {
    sections.forEach(section => {
        let classList = section.classList;
        console.log(isInViewport(section));
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
    document.querySelectorAll('a[href^="#section"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // this code marks the links active after removing the previous states
        const allLinks = document.querySelectorAll('a[href^="#section"]');
        allLinks.forEach(link=>{
          link.classList.remove('active')
        });
        // adding the active class to the href to change the css
        e.target.classList.add('active');
        //smooth scroll behavior applied here
         document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
        });
     });

//listener for the scroll and section activation functions
window.addEventListener('scroll', sectionActivation);

    })
