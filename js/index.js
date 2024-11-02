const log = console.log.bind();
// let hero = $('.hero');
// window.onscroll = () => {
//     if (
//       window.scrollY >= hero.offsetTop - 150 &&
//       window.scrollY < hero.offsetTop - 150 + hero.offsetHeight
//     ) {
//       scrllupBtn.style.display = "none";
//       log("should be hidden wtf");
//     } else {
//       scrllupBtn.style.display = "flex";
//       log("can say hai");
//     }
// };
//not skibidi

const navBarHeight = $('.nav-bar').outerHeight();
const hero = $('.hero');
const scrllupBtn = $('.scrllup');

$(window).on('scroll', function() {
    if (
        $(window).scrollTop() >= hero.offset().top - navBarHeight - 150 &&
        $(window).scrollTop() < hero.offset().top - navBarHeight - 150 + hero
    ) {
        scrllupBtn.css('display', 'none')
    } else {
        scrllupBtn.css('display', 'flex')
    }
});

// When the user clicks on the button, scroll to the top of the document
function scrllUp() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
