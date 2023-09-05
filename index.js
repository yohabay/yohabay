// split text display//////////////////////
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    })
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);


// Additionalinformation display//////////////////////

const readMoreBtns = document.querySelectorAll('.btn-box.service-btn .btn');

readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const additionalInfo = btn.parentElement.nextElementSibling;
        if (additionalInfo.style.display === 'none') {
            additionalInfo.style.display = 'block';
            btn.textContent = 'Read less';
        } else {
            additionalInfo.style.display = 'none';
            btn.textContent = 'Read more';
        }
    });
});
const readMoreBtn = document.querySelectorAll('.btn-box.cv-btn .btn');

readMoreBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const additionalInfo = btn.parentElement.nextElementSibling;
        if (additionalInfo.style.display === 'none') {
            additionalInfo.style.display = 'block';
            btn.textContent = 'Back to Menu';
        } else {
            additionalInfo.style.display = 'none';
            btn.textContent = 'Download CV';
        }
    });
});


// circle skill//////////////////////////////
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i};--rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }


})

// active menu///////////////////////////
let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activemenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
}
activemenu();
window.addEventListener("scroll", activemenu);

// sticky menu/////////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 50);
})

// toogle icon navbar///////////////////////
let menuicon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuicon.onclick = () => {
    menuicon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = () => {
    menuicon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// filter///////////////////////////////////
var mixer = mixitup('.portfolio-gallary');


// barabolax//////////////////////////////
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});
const scrollscale = document.querySelectorAll(".scroll-scale");
scrollscale.forEach((el) => observer.observe(el));
const scrollButtom = document.querySelectorAll(".scroll-buttom");
scrollButtom.forEach((el) => observer.observe(el));
const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));