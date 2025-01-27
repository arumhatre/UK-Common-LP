// Function to initialize Owl Carousel with dynamic options
function initializeCarousel(selector, options) {
  $(selector).owlCarousel(options);
}

// Carousel configurations
const carouselConfigs = {
  screenshot_slider: {
    loop: false,
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
  },
  ourdoctor_slider: {
    loop: false,
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
  },
  awards_slider: {
    loop: false,
    responsiveClass: true,
    nav: true,
    margin: 2,
    autoplay: false,
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
  }
};

// Initialize all carousels
initializeCarousel(".screenshot_slider", carouselConfigs.screenshot_slider);
initializeCarousel(".ourdoctor_slider", carouselConfigs.ourdoctor_slider);
initializeCarousel(".awards_slider", carouselConfigs.awards_slider);

// Form focus styling
$('input,textarea').val("");
$('.form-group input, .form-group textarea, .form-group select').focusout(function () {
  $(this).toggleClass('has-value', $(this).val() !== "");
});

// Tab functionality
function setupTabs() {
  $(".tabb_content").hide().first().show();
  $("ul.nptabbs li").on("click", function () {
    const target = $(this).attr("rel");
    $(".tabb_content").hide();
    $("#" + target).fadeIn();
    $("ul.nptabbs li").removeClass("active");
    $(this).addClass("active");
    $(".tabb_drawer_heading").removeClass("d_active");
    $(".tabb_drawer_heading[rel='" + target + "']").addClass("d_active");
  });

  $(".tabb_drawer_heading").on("click", function () {
    const target = $(this).attr("rel");
    $(".tabb_content").hide();
    $("#" + target).fadeIn();
    $(".tabb_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");
    $("ul.nptabbs li").removeClass("active");
    $("ul.nptabbs li[rel='" + target + "']").addClass("active");
  });

  $("ul.nptabbs li").last().addClass("tabb_last");
}

// Tab control for responsive behavior
function tabControl() {
  const tabs = $(".tabbed-content .tabs");
  if (tabs.is(":visible")) {
    tabs.find("a").on("click", function (e) {
      e.preventDefault();
      const target = $(this).attr("href");
      tabs.find("a").removeClass("active");
      $(".tabbed-content .item").removeClass("active");
      $(this).addClass("active");
      $(target).addClass("active");
    });
  } else {
    $(".tabbed-content .item").on("click", function () {
      const target = $(this).attr("id");
      const parent = $(this).parents(".tabbed-content");
      parent.find(".tabs a").removeClass("active");
      parent.find(".item").removeClass("active");
      $(this).addClass("active");
      parent.find(`.tabs a[href="#${target}"]`).addClass("active");
    });
  }
}

// Initialize tabs and tab control
setupTabs();
tabControl();

// Adjust tab control on resize
let resizeTimer;
$(window).on("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(tabControl, 250);
});
