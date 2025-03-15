const cursor = document.querySelector('#cursor');
const cursorBlur = document.querySelector('#cursor-blur');

document.addEventListener('mousemove', (dets) => {
    if (window.innerWidth > 1024) {
        cursor.style.left = dets.x - 10 + 'px';
        cursor.style.top = dets.y - 10 + 'px';
        cursorBlur.style.left = dets.x - 200 + 'px';
        cursorBlur.style.top = dets.y - 200 + 'px';
    }
});

function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

let swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});


// change the about pic in hover
document.addEventListener("DOMContentLoaded", function () {
    const aboutPic = document.querySelector(".about-pic");
    const originalSrc = aboutPic.src;
    const hoverSrc = "./assets/about-pic-color.png"; // Update with your hover image path

    aboutPic.addEventListener("mouseenter", () => {
        aboutPic.src = hoverSrc;
    });

    aboutPic.addEventListener("mouseleave", () => {
        aboutPic.src = originalSrc;
    });
});
