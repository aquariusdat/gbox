$(window).on("load", () => {
    setTimeout(() => {
        $('.loading').fadeOut("slow");
    }, 1000)
    setTimeout(() => {
        TweenMax.staggerFrom(
            $('.welcome .text__welcome'),
            1.5,
            { x: 200, opacity: 0, ease: "elastic.out(1,0.3)" },
            0.5
        );
    }, 1001)

});

$(document).ready(function () {

    // var arrLoadingText = gsap.utils.toArray('.loading .loading__wrapper .text__loading p');

    // arrLoadingText.forEach(item => {
    //     var tlLoading = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.loading .loading__wrapper .text__loading',
    //             repeat: -1,
    //             yoyo: true

    //         }
    //     })
    //     var tl = new TimelineMax({ repeat: 1, yoyo: true });
    //     tl.to('.loading .loading__wrapper .text__loading .l',
    //         {
    //             y: '-20px', duration: 0.4
    //         });
    //     tl.to('.loading .loading__wrapper .text__loading .o',
    //         {
    //             y: '-20px', duration: 0.4
    //         });
    //     tl.to('.loading .loading__wrapper .text__loading .a',
    //         {
    //             y: '-20px', duration: 0.4
    //         });
    //     tl.to('.loading .loading__wrapper .text__loading .d',
    //         {
    //             y: '-20px', duration: 0.4
    //         });
    //     tl.to('.loading .loading__wrapper .text__loading .i',
    //         {
    //             y: '-20px', duration: 0.4
    //         });
    //     tl.to('.loading .loading__wrapper .text__loading .n',
    //         {
    //             y: '-20px', duration: 0.4
    //         });
    //     tl.to('.loading .loading__wrapper .text__loading .g',
    //         {
    //             y: '-20px', duration: 0.4
    //         });
    //     tl.to('.loading .loading__wrapper .text__loading .dot1',
    //         {
    //             y: '-20px', duration: 0.4
    //         });
    //     tl.to('.loading .loading__wrapper .text__loading .dot2',
    //         {
    //             y: '-20px', duration: 0.4
    //         });
    //     tl.to('.loading .loading__wrapper .text__loading .dot3',
    //         {
    //             y: '-20px', duration: 0.4
    //         })

    // });

    // var cursor = document.querySelector('.cursor');

    // document.addEventListener('mousemove', e => {
    //     cursor.setAttribute("style", "top: " + (e.pageY - scrollY) + "px; left: " + (e.pageX) + "px")
    // });

    // $('*').hover(function () {
    //     $(this).data('hover', 1); //store in that element that the mouse is over it
    // },
    //     function () {
    //         $(this).data('hover', 0); //store in that element that the mouse is no longer over it
    //     });


    // window.isHovering = function (selector) {
    //     return $(selector).data('hover') ? true : false; //check element for hover property
    // }

    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: '.footer__content',
                start: 'center bottom',
                end: 'bottom center',
            }
        }
    )

    tl.from(".leftinfo", { x: -100, opacity: 0, duration: 1 }).from(".rightinfo", { x: 100, opacity: 0, duration: 1 }, "-=1")


    var studioHref = document.getElementById('studio');
    studioHref.addEventListener('click', () => {
        setTimeout(() => {
            document.location.replace('./studio.html');
        }, 700)
    });

});

$(document).ready(function () {


    if (screen.width >= 320 && screen.width <= 768) {
        var sections = gsap.utils.toArray('.content .content__row .box');

        sections.forEach((section) => {
            gsap.from(section,

                {
                    scale: 0.3, opacity: 0, duration: 0.4,
                    scrollTrigger: {
                        trigger: section,

                        start: 'center bottom',
                        end: 'bottom center'
                    }
                });
        });
    }

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