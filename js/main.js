$(document).ready(function () {
    TweenMax.staggerFrom(
        $('.welcome .text__welcome'),
        1.5,
        { x: 200, opacity: 0, ease: "elastic.out(1,0.3)" },
        0.5
    );
})



var input = document.querySelectorAll('.footer__content .submit .col__item input');

document.querySelectorAll('.footer__content .submit .col__item input').forEach(function (e) {
    e.addEventListener("focus", function () {
        $(this).siblings('p').each(function () {
            console.log(this)
            if (!this.classList.contains('focus')) {
                this.classList.add('focus');
            }


        });
    })
    e.addEventListener("blur", function () {
        $(this).siblings('p').each(function () {
            console.log(this)
            if (this.classList.contains('focus')) {
                this.classList.remove('focus');
            }


        });
    })
})