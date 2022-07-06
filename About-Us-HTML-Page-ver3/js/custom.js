/******************/
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
});

// change is-checked class on buttons
var $buttonGroup = $('.taber ul');
$buttonGroup.on( 'click', 'button', function( event ) {
  $buttonGroup.find('.active').removeClass('active');
  var $button = $( event.currentTarget );
  $button.addClass('active');
  var filterValue = $button.attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.about-slider').slick({
draggable: true,
arrows: false,
dots: true,
fade: true,
speed: 900,
infinite: true,
cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
touchThreshold: 100
});



$('.achievements-slider').slick({
draggable: true,
arrows: true,
dots: true,
fade: true,
speed: 900,
infinite: true,
cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
touchThreshold: 100
});
/*****/
if($('.achievement-th-slide').length>0) {
   $('.achievement-th-slide').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerPadding: '70px',
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               centerPadding: '160px',
               slidesToShow: 1
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               centerPadding: '30px',
               slidesToShow: 1
            }
         }
      ]
   });
}

// Slick lightbox

if($('.th-lightbox').length>0) {
   $('.th-lightbox').slickLightbox({
      itemSelector: 'a.open-lightbox',
      caption: 'caption',
      navigateByKeyboard: true,
      layouts: {
         closeButton: '<button class="btn close"><i class="fas fa-times"></i></button>'
      },
	  
   });
}
/********************/

var slickSliderActive = false;
function checkSlider(){    
  if( $(window).width() < 768 - getScroll() ) {
    if(slickSliderActive == false) {
      $('.about-section-3 .news-box').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows: false,
      });
      slickSliderActive = true;
    }
  
  } 
  else {
    if(slickSliderActive == true) {
      $('.about-section-3 .news-box').slick('unslick');
      slickSliderActive = false;
    }
  }
};
checkSlider();
$(window).on('resize', function(){
   checkSlider();
});
function getScroll(){
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollWidth;
}
/*********************************/
$('.strategy-slider').slick({
arrows:false,
dots: true,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
speed: 900,
responsive: [
    { breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    { breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
	},
	{ breakpoint: 374,
      settings: {
        slidesToShow: 1,
		centerMode: true,
        centerPadding: '40px',
      }
    }]
});

$('.performance-slider').slick({
arrows:false,
dots: true,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
speed: 900,
responsive: [
    { breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    { breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
	},
	{ breakpoint: 374,
      settings: {
        slidesToShow: 1,
		centerMode: true,
        centerPadding: '40px',
      }
    }]
});
$('.profit-slider').slick({
arrows:false,
dots: true,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
speed: 900,
responsive: [
    { breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    { breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
	},
	{ breakpoint: 374,
      settings: {
        slidesToShow: 1,
		centerMode: true,
        centerPadding: '40px',
      }
    }]
});
$('.contribution-slider').slick({
arrows:false,
dots: true,
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
speed: 900,
responsive: [
    { breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    { breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
	},
	{ breakpoint: 374,
      settings: {
        slidesToShow: 1,
		centerMode: true,
        centerPadding: '40px',
      }
    }]
});
/********investor-slider********/
$('.investor-slider').slick({
draggable: true,
arrows: false,
dots: true,
fade: true,
speed: 900,
infinite: true,
cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
touchThreshold: 100
});
/***************sustainability-slider**************/
$('.sustainability-slider').slick({
draggable: true,
arrows: false,
dots: true,
fade: true,
speed: 900,
infinite: true,
cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
touchThreshold: 100
});
$('.overview-sustainability-slider').slick({
arrows:true,
dots: false,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
speed: 900,
responsive: [
    { breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    { breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
	},
	{ breakpoint: 575,
      settings: {
        slidesToShow: 1,
		centerMode: true,
        centerPadding: '40px',
      }
    }]
});
/******************************/
$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 63) {
    $('.custom-sticky-menu .navbar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 64) {
    $('.custom-sticky-menu .navbar').removeClass('navbar-fixed');
  }
});

