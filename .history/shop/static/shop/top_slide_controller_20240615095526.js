// static/shop/top_slide_controller.js

document.addEventListener('DOMContentLoaded', function () {
    const topSlider = document.querySelector('.top-slider');
    const slides = topSlider.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    document.querySelector('.top-slider-next').addEventListener('click', nextSlide);
    document.querySelector('.top-slider-prev').addEventListener('click', prevSlide);

    // Initialize the slider
    showSlide(currentIndex);
});
