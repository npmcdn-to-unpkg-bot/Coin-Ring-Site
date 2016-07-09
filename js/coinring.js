// JavaScript Document
// external js: isotope.pkgd.js
$(function () {
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

/*$('#test').on('click', function() {
  $('.non').hide();
   var main = $('#columns');
  for(var i =0; i<main[0].children.length; i++) {
    
  products.push(main[0].children[i]);
  } 
  
});
$('#hide').on('click', function() {
  $('.non').show();
});*/

$('.product').on('click', function() {
  var balls = $(this);
  console.log(products[0].text);
  /*var pop = $('#popup');
  pop.css('display', 'block');
  pop.html(balls);*/

});

var $grid = $('.grid');
$(window).on('load', function(){
  $grid.append(
    '<div class="product grid-2">\
      <div class= "image">\
      <img src=' + products[0].img + '> \
      </div> \
    </div>');

  console.log(products[0].name);

});


var $grid = $('.grid'),
  fitWidthTorF = true,
  winWidth = $(window).width();

$(window).resize(function(){
    winWidth = $(window).width();
});


if(winWidth < 500) {
  fitWidthTorF = false;
}


  $grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
  });

  $grid.isotope({
    itemSelector: '.product',
    masonry: {
      gutter: 5,
      columnWidth: 200,
      isFitWidth: fitWidthTorF,
      layoutMode: 'packery'
    }

  });
/*$grid.on( 'click', '.product', function() {
  // change size of item by toggling gigante class
  $( this ).toggleClass('gigante');
  $grid.isotope('layout');
});*/

}); // end main function

/*if(width > 630) {
  console.log(masonry.gutter);
  }*/
