$(document).ready(function() {
    // Function to slide images horizontally
    function slideHorizontally(selector, interval) {
        var $container = $(selector);
        var $ul = $container.find('ul');
        var $li = $ul.find('li');
        var slideWidth = $li.outerWidth(true);
        var slideCount = $li.length;
        var currentIndex = 0;

        setInterval(function() {
            currentIndex = (currentIndex + 1) % slideCount;
            $ul.css('transform', 'translateX(' + (-slideWidth * currentIndex) + 'px)');
        }, interval);
    }

    // Apply the sliding effect
    slideHorizontally('.slide', 3000); // 3 seconds interval
});
