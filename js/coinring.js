// JavaScript Document
// external js: isotope.pkgd.js

$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $("nav").fadeIn();
    } else {
        $("nav").fadeOut();
    }
    this.previousTop = currentTop;
});

$('.grid').isotope({
  itemSelector: '.product',
  masonry: {
    gutter: 5,
    columnWidth: 200,
    isFitWidth: true,
    layoutMode: 'packery'
  }
});
