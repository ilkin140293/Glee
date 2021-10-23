$( function(){

  $('.star').rateYo({
    rating: 4,
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starWidth: "12px",
  });

  $('.star-big').rateYo({
    rating: 2,
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starWidth: "18px",
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