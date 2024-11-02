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


const hero = $('.hero');
const floatingNavBar = $('.floating-nav-bar');
const scrllupBtn = $('.scrllup');

$(window).on('scroll', function() {
    const scrollPosition = $(window).scrollTop();
    const heroBottom = hero.offset().top + hero.outerHeight();

    // Show floating nav bar when hero section is out of view
    if (scrollPosition >= heroBottom - hero.outerHeight() / 2) {
        floatingNavBar.addClass('show');
    } else {
        floatingNavBar.removeClass('show');
    }

    // Show scroll-up button when hero is mostly off-screen
    if (scrollPosition >= heroBottom - hero.outerHeight() / 2) {
        scrllupBtn.css('display', 'flex');
    } else {
        scrllupBtn.css('display', 'none');
    }
});

// Smooth scroll to top when scroll-up button is clicked
function scrllUp() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}


// Function to remove the development notice if the correct password is entered
function removeDevNotice() {
    const password = "letmein"; // Set your desired password here
    const enteredPassword = prompt("Password:");
    const devNotice = $('.dev-notice');

    // Check if the entered password matches
    if (enteredPassword === password) {
        // const devNotice = document.getElementById("devNotice");
        // devNotice.style.display = "none"; // Hide the banner
        devNotice.hide();
        alert("Development notice removed.");
    } else {
        alert("Incorrect password.");
    }
}

// Call the function
removeDevNotice();