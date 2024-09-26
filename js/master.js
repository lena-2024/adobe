// console.log($(window).width() <= 480)

// let isMobile;

// if($(window).width() <= 480) {
//     isMobile = true;
// }else {
//     isMobile = false;
// }

// console.log(isMobile);

const isMobile = $(window).width() <= 480;
const $grid = $('#Grid');
const $nav = $('#Nav');

// console.log(isMobile);

// console.log(1 == '1'); // true
// console.log(1 === '1'); // false

function setGrid() {
  if (isMobile === true) {
    $grid.addClass('grid-2');
  } else {
    $grid.addClass('grid-3');
  }
}


function setScroll() {

  if (isMobile === true) {
    $(window).scroll(function () {
      if ($(this).scrollTop() === 0) {
        $nav.removeClass('nav-active');
      } else {
        $nav.addClass('nav-active');
      }
    });

  }

}

function setInit() {
  setGrid();
}

function setEvent() {
  setScroll();
}

const $anchors = $('[data-fancybox]');
$anchors.fancybox({
  protect: true,
  loop: true,
  // animationDuration: 1000,
  transitionDuration: 1000,
  transitionEffect: "rotate",
  keyboard: false,
  fullScreen: {
    autoStart: true
  },
  infobar: false,
  toolbar: true,
  smallBtn: true,
  // arrows: false,
  slideShow: {
    autoStart: false,
    speed: 1000,
  },
  thumbs: true,
  buttons: [
    'share',
    'zoom',
    'slideShow'
  ],
  media: {
    youtube: {
      params: {
        autoplay: false,
      }
    }
  }
});





setInit();
setEvent();

