document.addEventListener('scroll', function() {
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var scrollPosition = window.scrollY;

    // Adjust this value based on when you want the boxes to appear
    var triggerScroll = 150; // Example threshold

    if (scrollPosition > triggerScroll) {
        box1.style.display = 'flex';
        box2.style.display = 'flex';

        // Trigger animation classes
        box1.classList.add('animate-from-left');
        box2.classList.add('animate-from-right');
    } else {
        // Optional: Reset styles if scrolled back up
        box1.style.display = 'none';
        box2.style.display = 'none';

        // Optional: Remove animation classes if scrolled back up
        box1.classList.remove('animate-from-left');
        box2.classList.remove('animate-from-right');
    }
});
