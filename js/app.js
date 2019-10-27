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
 * Define Global Variables
 * 
*/



let allSections = document.querySelectorAll('section');

let navbarList = document.getElementById('navbar__list'),
    counter = 1;



// Define goSection function -- when the approriate section when user click in nav bar



/**
 Insert new section in the main Section 
 */





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
for (let i = 0; i < allSections.length; i++) {
    let newnavListItem = document.createElement('li');
    var newAnchor = document.createElement("a");
    newAnchor.setAttribute('href', "#allSections[i].id")
    newAnchor.innerHTML = allSections[i].dataset.nav;
    newnavListItem.appendChild(newAnchor);
    navbarList.appendChild(newnavListItem);
    counter++;
}

// Add class 'active' to section when near top of viewport




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

for (let i = 0; i < navbarList.length; i++) {
    navbarList[i].addEventListener = ("click", activateSection());
    navbarList[i].style.color = 'green';
}


// Define goSection function -- when the approriate section when user click in nav bar
function activateSection() {


}


// Set sections as active


