// Select the masthead element
const masthead = document.querySelector('.masthead');

// Function to add or remove the .scrolled class
function handleScroll() {
    if (window.scrollY > 0) {
        masthead.classList.add('scrolled');
    } else {
        masthead.classList.remove('scrolled');
    }
}

// Add event listener for scroll events
window.addEventListener('scroll', handleScroll);