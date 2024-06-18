// static/shop/weekly_slide.js

document.addEventListener('DOMContentLoaded', function () {
    const slideContainer = document.querySelector('.weekly_slide .slide_item ul');
    const slides = slideContainer.querySelectorAll('li');
    let currentIndex = 0;

    function showSlide(index) {
        slideContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // For demonstration, auto-advance slides every 3 seconds
    setInterval(nextSlide, 3000);

    // Initialize the slider
    showSlide(currentIndex);
});
