$(function () {
  let height = $(".HomeSection").height();
  $(window).scroll(function () {
    var scrollTopValue = $(window).scrollTop();
    if (scrollTopValue > height) {
      $("header").css({
        backgroundColor: "#fff",
      });
      $("nav ol li a").css({
        color: "#414f6b",
        borderBottom: "0.18rem solid #414f6b",
      });
      $('.logo1').hide();
      $('.logo2').show();
    } 
    
    else {
      $('.logo1').show();
      $('.logo2').hide();
      $("header").css({
        backgroundColor: "transparent",
      });
      $("nav ol li a").css({
        color: "#fff",
        borderBottom: "0.18rem solid #fff",
      });
    }
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700:{
        items:3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
