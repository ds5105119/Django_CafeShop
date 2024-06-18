// static/shop/weekly_slide.js

document.addEventListener('DOMContentLoaded', function () {
    const weeklySlider = document.querySelector('.weekly-slider');
    const slides = weeklySlider.querySelectorAll('.slide');
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

    document.querySelector('.weekly-slider-next').addEventListener('click', nextSlide);
    document.querySelector('.weekly-slider-prev').addEventListener('click', prevSlide);

    // Initialize the slider
    showSlide(currentIndex);
});
