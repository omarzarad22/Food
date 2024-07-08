let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const visibleItems = Math.floor(carousel.parentElement.clientWidth / items[0].clientWidth);

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalItems - visibleItems) {
        currentIndex = totalItems - visibleItems;
    }

    const offset = -currentIndex * items[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

window.addEventListener('resize', () => {
    moveCarousel(0); // Adjust position on resize
});
