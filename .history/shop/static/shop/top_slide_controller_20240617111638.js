document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('#slider-div .slide > div');
    var currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 3000); // 3초마다 다음 슬라이드로 넘어감

    showSlide(currentSlide); // 첫 슬라이드 표시
});
