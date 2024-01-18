// JS code has to wait until my HTML is fully loaded before it can trigger the JS code
document.addEventListener('DOMContentLoaded' , function () {
    //use arrow-icon to show and hide elements
    const arrowIcon = document.getElementById('arrow-icon');

    const lineElement = document.querySelector('.line');

    const barLinksElement  = document.querySelector('.bar-links');

    // Click event Listener to the arrow-icon
    arrowIcon.addEventListener('click', function () {
        // toggle down and up on arrow-icon
        arrowIcon.classList.toggle('down');
        console.log('clicked');

        arrowIcon.classList.toggle('up');

        // toggle 'hidden' class on the line and bar-links elements
        lineElement.classList.toggle('hidden');

        barLinksElement.classList.toggle('hidden');
    });
});