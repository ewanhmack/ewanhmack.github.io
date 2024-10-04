// Get references to the button and the dropdown content
const menuIcon = document.getElementById('menuIcon');
const menuContent = document.getElementById('menuContent');

// Add a click event listener to the icon
menuIcon.addEventListener('click', function() {
    // Toggle the display of the menu content
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
});

// Optional: Close the menu when clicking outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('#menuIcon')) {
        menuContent.style.display = 'none';
    }
});
