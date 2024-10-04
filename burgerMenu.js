// Get references to the button and the dropdown content
const menuIcon = document.getElementById('menuIcon');
const menuContent = document.getElementById('menuContent');

// Add a click event listener to the icon
menuIcon.addEventListener('click', function() {
    // Toggle the 'show' class to display or hide the menu
    menuContent.classList.toggle('show');
});

// Optional: Close the menu when clicking outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('#menuIcon')) {
        menuContent.classList.remove('show');
    }
});
