let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const visibleSlides = 4; // Number of visible slides (25% each means 4 slides visible at a time)

    // Calculate the new index
    currentIndex = (currentIndex + 1) % totalSlides;

    // Move the carousel
    const newTransformValue = -currentIndex * (100 / visibleSlides);
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}

// Set an interval to show the next slide every 3 seconds
setInterval(showNextSlide, 2000);
