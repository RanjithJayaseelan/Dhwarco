//Nav bar scroll funtion
$(document).ready(function () {

  $(window).scroll(function () {

    if ($(this).scrollTop() > 10) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });

  $('#image-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: null,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//Live chat
//Start of Tawk.to Script
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/5dcbbdc3d96992700fc73272/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

//End of Tawk.to Script
//var myVar = setTimeout(setChat, 5000);

//function setChat() {
//  var x = document.getElementsByClassName('open');
//if (x.style.display === 'none') {
//   x.style.display = 'block';
// } else {
//   x.style.display = 'none';
// }
// }



// //for Contct page popover below mail and phone

// $(document).ready(function () {
//   $('[data-toggle="popover"]').popover();
// });

$(document).ready(function () {
  $(".navbar-toggle").click(function () {
    $(".navbar").addClass("solid");
  });
});

// FAQ Section -  JavaScript code here

// How it works Section 

// Custom JavaScript
$(document).ready(function(){
  // Animate heading to appear
  $('#animateH').animate({ opacity: 1 }, 1000, 'easeIn');

  // Animate paragraph to bounce in
  $('#animateP').animate({ opacity: 1 }, {
    duration: 1500,
    easing: 'easeInOutBounce'
  });
});


