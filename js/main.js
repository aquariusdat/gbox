$(document).ready(function () {
    TweenMax.staggerFrom(
        $('.welcome .text__welcome'),
        0.8,
        { x: 200, opacity: 0 },
        0.4
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