$( function(){

  $('.product-page__input').styler({

  });

  $('.information__top-item').on('click', function (e) {
    e.preventDefault();
    $('.information__top-item').removeClass('information__top-item--active');
    $(this).addClass('information__top-item--active');

    $('.information__content-item').removeClass('information__content-item--active');
    $($(this).attr('href')).addClass('information__content-item--active');
  });

  $('.related-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="22px" height="9px"><path fill-rule="evenodd"  fill="rgb(163, 187, 200)"d="M21.704,3.526 L21.712,3.529 L4.756,3.529 L4.856,0.670 C4.910,0.616 4.940,0.542 4.940,0.465 C4.940,0.388 4.910,0.315 4.856,0.261 L4.684,0.087 C4.629,0.033 4.557,0.003 4.480,0.003 C4.403,0.003 4.331,0.033 4.276,0.087 L0.084,4.298 C0.030,4.353 -0.000,4.426 -0.000,4.503 C-0.000,4.580 0.030,4.653 0.084,4.707 L4.276,8.920 C4.331,8.973 4.403,9.003 4.480,9.003 C4.557,9.003 4.629,8.973 4.684,8.920 L4.856,8.746 C4.910,8.692 4.940,8.619 4.940,8.542 C4.940,8.465 4.910,8.396 4.856,8.342 L4.743,5.478 L21.708,5.478 C21.867,5.478 22.000,5.340 22.000,5.181 L22.000,3.812 C22.000,3.653 21.863,3.526 21.704,3.526 Z"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="22px" height="9px"><path fill-rule="evenodd"  fill="rgb(163, 187, 200)"d="M0.296,5.473 L0.288,5.471 L17.244,5.471 L17.144,8.329 C17.089,8.384 17.060,8.458 17.060,8.534 C17.060,8.612 17.089,8.684 17.144,8.739 L17.316,8.912 C17.371,8.967 17.443,8.996 17.520,8.996 C17.597,8.996 17.669,8.967 17.724,8.913 L21.916,4.701 C21.970,4.647 22.000,4.573 22.000,4.497 C22.000,4.420 21.970,4.347 21.916,4.293 L17.724,0.080 C17.669,0.026 17.597,-0.003 17.520,-0.003 C17.443,-0.003 17.371,0.026 17.316,0.080 L17.144,0.254 C17.089,0.307 17.060,0.380 17.060,0.458 C17.060,0.535 17.089,0.604 17.144,0.657 L17.257,3.522 L0.292,3.522 C0.133,3.522 -0.000,3.659 -0.000,3.818 L-0.000,5.188 C-0.000,5.347 0.137,5.473 0.296,5.473 Z"/></svg></button>',
  });

  $('.product-slider__thumb').slick({
    asNavFor: '.product-slider__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.product-slider__big').slick({
    asNavFor: '.product-slider__thumb',
    arrows: false,
    draggable: false,
    fade: true,
  });

  $('.star').rateYo({
    rating: 5,
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    starWidth: '12px',
    starSvg: '<svg width="12px" height="11px" viewBox="0 0 12 11" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 6.597656 0.382812 L 7.960938 3.226562 L 11.011719 3.683594 C 11.558594 3.765625 11.777344 4.460938 11.378906 4.855469 L 9.175781 7.050781 L 9.695312 10.175781 C 9.789062 10.742188 9.210938 11.164062 8.726562 10.902344 L 6 9.445312 L 3.273438 10.921875 C 2.789062 11.183594 2.210938 10.761719 2.304688 10.195312 L 2.824219 7.070312 L 0.621094 4.859375 C 0.222656 4.460938 0.441406 3.765625 0.988281 3.683594 L 4.039062 3.226562 L 5.402344 0.382812 C 5.648438 -0.128906 6.355469 -0.125 6.597656 0.382812 Z M 6.597656 0.382812 "/></g></svg>',
  });

  $('.star-big').rateYo({
    rating: 5,
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    starWidth: '18px',
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 9.898438 0.554688 L 11.941406 4.695312 L 16.515625 5.359375 C 17.335938 5.476562 17.667969 6.488281 17.070312 7.066406 L 13.761719 10.253906 L 14.542969 14.800781 C 14.6875 15.625 13.820312 16.238281 13.09375 15.855469 L 9 13.738281 L 4.910156 15.882812 C 4.179688 16.265625 3.316406 15.652344 3.457031 14.832031 L 4.238281 10.285156 L 0.929688 7.066406 C 0.335938 6.488281 0.664062 5.476562 1.484375 5.359375 L 6.058594 4.695312 L 8.101562 0.558594 C 8.472656 -0.191406 9.53125 -0.179688 9.898438 0.554688 Z M 9.898438 0.554688 "/></g></svg>',
  });


  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({

    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed:3000

  })

  var mixer = mixitup('.products__items');
  var mixer = mixitup('.design__items');
  
});