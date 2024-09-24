// console.log($(window).width() <= 480) ;

// let isMobile;

// if ($(window).width() <= 480) {
//     isMobile = true;
// }else {
//     isMobile = false;
// }
// console.log(isMobile);

const isMobile = $(window).width() <= 480
const $grid = $('#Grid')

// console.log(isMobile);

function setGrid(){
    if (isMobile === true) {
        $grid.addClass('grid-2');
    } else {
        $grid.addClass('grid-3');
    } 
}

function setInit(){
    setGrid();
}

setInit();









