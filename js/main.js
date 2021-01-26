var input = document.querySelectorAll('.footer__content .submit .col__item input');

document.querySelectorAll('.footer__content .submit .col__item input').forEach(function(e){
    e.addEventListener("focus", function(){
        $(this).siblings().each(function(){
                console.log(this)
                if(!this.classList.contains('focus'))
                {
                    this.classList.add('focus');
                }
                
            
        });
    })
    e.addEventListener("blur", function(){
        $(this).siblings().each(function(){
                console.log(this)
                if(this.classList.contains('focus'))
                {
                    this.classList.remove('focus');
                }
                
            
        });
    })
})