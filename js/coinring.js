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

    var $grid = $('.grid');

    $(window).on('load', function(){
      $.each(products, populateImages);
      function populateImages(index, value) {
        $grid.append(
        '<div class ="' + products[index].class + '" data-status = "' + index + '"' +
          'data-filter="' + products[index].dataFilter + '">' +
           '<div class = "image">' +
            '<img src=' + products[index].img + '>' +
            '<h1>' + '$' + products[index].price + '</h1>' +
          '</div>' +
          '<p>' + products[index].text + '</p>' +
        '</div>');
      }
    var fitWidthTorF = true,
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

    $('.filters-button-group').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        $grid.isotope({ filter: filterValue });
      });
      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });


      $('.product').on('click', function() {
        var balls = $(this).data();
        //console.log(products[0].text);
        console.log(products[balls.status].img);
        var pop = $('#popup');
        pop.css('display', 'block');
        pop.html('<img src=' + products[balls.status].img + '>');
      });
  });
}); // end main function

/*if(width > 630) {
  console.log(masonry.gutter);
  }*/
