window.addEventListener('load', function(){
    new Glider(document.querySelector('.carusel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carusel__indicadores',
        arrows: {
          prev: '.carusel__anterior',
          next: '.carusel__siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 450,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
              
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 800,
              settings: {
                slidesToShow: 11,
                slidesToScroll: 11,
               
              }
            }
          ]
    });     
});