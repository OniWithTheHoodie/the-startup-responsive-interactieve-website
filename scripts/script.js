// DropDOwn mobile

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

// SIDEBAR DESKTOP
document.addEventListener('DOMContentLoaded' , function () {
    //use arrow-icon to show and hide elements
    const sideBarText1 = document.querySelector('.sidebar-text');

    const sideBarText2 = document.querySelector('.sidebar-text2');


    const sideLink  = document.querySelector('.side-line');

    // Click event Listener to the arrow-icon
    sideBarText1.addEventListener('click', function () {
        // toggle down and up on arrow-icon
        sideBarText1.classList.toggle('sidebar-text');
        console.log('clicked');

        sideBarText2.classList.toggle('sidebar-text2');

        // toggle 'hidden' class on the line and bar-links elements
        sideBarText1.classList.toggle('hidden');

        sideLink.classList.toggle('hidden');
    });
});