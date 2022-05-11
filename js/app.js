/*
 *  Global Variables
 */

// get the head ul tag in navbar
let headNavUl = document.getElementById("navbar__list");

// select all li in head ul
let lies = headNavUl.children;

// get all the sections diynamicly
let sections = document.querySelectorAll("section");

// get Scroll Back To Top Button
let backTop = document.getElementById("back-Top");


/*
 *Main Functions
 */

// Build menu add li to head ul dynamicly based on number of sections
function addLiToUl(sec) {
    headNavUl.innerHTML += `<li>${sec.attributes.id.value}</li>`;
};


function addActiveClassEvent(li) {
    li.addEventListener("click", () => {
        // remove active class from all li
        removeActiveClass();

        // apply active class to clicked element
        li.className = "active";

        // section which needs to be scrolled to
        let section = document.getElementById(li.innerHTML);

        // scroll to section
        section.scrollIntoView({ behavior: 'smooth' });
    });
};

// remove active class from all li
function removeActiveClass() {
    allLi.forEach((li) => {
        li.classList.remove("active");
    })
};

// remove active class from all sections
function removeAllActiveClasses() {
    sections.forEach((sec) => {
        sec.classList.remove("your-active-class");
    });
};

//get section id in the viewport to aplly active class on it
function addActiveClass(id) {
    document.querySelector(`[id="${id}"]`).classList.add("your-active-class");
};


//Show Scroll Back To Top Button
function showScrollToTop() {
    backTop.style.display = "block";
};

//hide Scroll Back To Top Button
function hideScrollToTop() {
    backTop.style.display = "none";
};

/*
 * end of Main Functions
 */

// Build menu add li to head ul dynamicly based on number of number of sections
sections.forEach(addLiToUl);

// convert it to arrey to loop it*/
let allLi = [...lies];

//loop allover li element add event to apply active class to selected element
allLi.forEach(addActiveClassEvent);

// dedidct Scroll Back To Top Button by scroll position
addEventListener("scroll", () => {
    if (scrollY > 470) {
        showScrollToTop();
    } else if (scrollY < 470) {
        hideScrollToTop();
    }
});

// Scroll Back To Top
backTop.addEventListener("click", () => {
    removeActiveClass();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add class 'active' to section when near top of viewport
onscroll = function() {
    let scrollPosition = document.body.scrollTop;
    sections.forEach((sec) => {
        if (scrollPosition >= sec.offsetTop - sec.offsetHeight * 0.18 && scrollPosition < sec.offsetTop + sec.offsetHeight - sec.offsetHeight * 0.18) {
            let secId = sec.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(secId);
        }
    })
};