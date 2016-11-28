/*
 * - Add an event listener for document click
 * - Define a function that filters the unwanted click events on the document
 */

// Add an event listener for document click
document.addEventListener('click', tabClick);

// Define a function that filters the unwanted click events on the document
function tabClick(event) {
    var elem = event.target,
        elemHREF = elem.getAttribute('href'),
        tabs = document.querySelectorAll('.tabs li a'),
        tabContents = document.querySelectorAll('.tab-contents li');

    // If we click an element whos href contains "tab-", proceed
    if (elemHREF != null && elemHREF.indexOf('tab-') != -1) {
        event.preventDefault();

        // If we didn't click an active item, switch tabs
        if (elem.className.indexOf('active') == -1) {
            // Remove the active class from the tabs and the visible class from the tab contents
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                tabContents[i].classList.remove('visible');
            }

            // Add the active class to the clicked element and the visible class to the corresponding tab
            elem.classList.add('active');
            document.getElementById(elemHREF).classList.add('visible');
        }
    }
}
