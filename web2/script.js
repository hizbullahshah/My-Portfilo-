
// document.addEventListener("DOMContentLoaded", function () {
//     const links = document.querySelectorAll("nav ul li a");

//     links.forEach(link => {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();
//             const targetId = this.getAttribute("href").substring(1);
//             document.getElementById(targetId).scrollIntoView({
//                 behavior: "smooth"
//             });
//         });
//     });
// });

// function scrollToSection(id) {
//     document.getElementById(id).scrollIntoView({
//         behavior: "smooth"
//     });
// }



const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');


menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {

    const barsBox = document.querySelector('.bars-box');
    const header = document.querySelector('header');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);


    navLinks.forEach((link) => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach((section) => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

navLinks.forEach((link, idx) => {
   link.addEventListener('click', () => {
    if(!link.classList.contains('active')) {
        activePage();

        link.classList.add('active');

        setTimeout( () => {
          sections[idx].classList.add('active');
        }, 1100);

    }
   });
});

logoLink.addEventListener("click", () => {
   if(!navLinks[0].classList.contains('active')){
    activePage();

    navLinks[0].classList.add('active');

    setTimeout( () => {
        sections[0].classList.add('active');
      }, 1100);


   }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach( (btn, idx) => {
    btn.addEventListener("click", () => {

        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});
//              .portfolio-box .navigation
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
console.log( arrowRight, arrowLeft)
let index = 0;

const activeportfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDatials = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDatials.forEach((detail) => {
        detail.classList.remove('active');
    });
    portfolioDatials[index].classList.add('active');
}

arrowRight.addEventListener("click", () => {
    if(index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activeportfolio();
});

arrowLeft.addEventListener("click", () => {
    if(index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    } else {
        index = 0;
        arrowLeft.classList.add('disabled');
        
    }

    activeportfolio();
});







