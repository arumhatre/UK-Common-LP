// Initialize carousel for screenshots and Google rating
    $(".screenshot_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 2 },
        1200: { items: 3 }
      }
    });

    // Initialize carousel for screenshots and Google rating
    $(".ourdoctor_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 7000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 1 },
        1024: { items: 1 },
        1200: { items: 1 }
      }
    });


    // Initialize carousel for screenshots and Google rating
    $(".awards_slider").owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: true,
      margin: 2,
      autoplay: false,
      autoplayTimeout: 6000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 3 },
        1024: { items: 4 },
        1200: { items: 4 }
      }
    });


       // Form focus styling
    $('input,textarea').val("");
    $('.form-group input, .form-group textarea, .form-group select').focusout(function() {
      var text_val = $(this).val();
      if (text_val === "") {
        $(this).removeClass('has-value');
      } else {
        $(this).addClass('has-value');
      }
    });
