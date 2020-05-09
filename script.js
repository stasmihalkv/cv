window.onload = function(){
    var changeBg = document.querySelector('.changeBgIcon');
    var all = document.querySelector('body');
    var projectsItem = document.querySelectorAll('.main-block__projects-item');
    var profilePhoto = document.querySelector('.aside-content__profile-photo')
    profilePhoto.classList.add('profile-photo_active')

    for(i=0;i<projectsItem.length;i++){
        projectsItem[i].onmouseover = handlerMouseBig;
        projectsItem[i].onmouseout = handlerMouseSmall;  
        changeBg.onclick = activateDarkTheme;

    }
    function handlerMouseBig(){ 
        this.classList.add('projects-item_active')
        for(i=0;i<projectsItem.length;i++){
            if(!projectsItem[i].classList.contains('projects-item_active')){
               projectsItem[i].classList.add('projects-item_non-active')
            }  
        }
    }
    function handlerMouseSmall(){ 
        this.classList.remove('projects-item_active')
        for(i=0;i<projectsItem.length;i++){
            if(!projectsItem[i].classList.contains('projects-item_active')){
            projectsItem[i].classList.remove('projects-item_non-active')
            }  
        }
}
    function activateDarkTheme(){
        all.classList.toggle('dark_active');
        this.classList.toggle('dark_active');
        for(i=0;i<projectsItem.length;i++){
            projectsItem[i].classList.toggle('dark_active');
        }
    };



}


    /*   $(".projects_item").hover(function(){
    $(this).animate({opacity:'1'})},
        function(){$(this).stop().animate({opacity:'0.3'})
    }
    );*/

    /* projectsItem.width(90).hover(function(){
        $(this).stop().animate({width: '900' +'px'});
    },
    function(){
        $(this).stop().animate({width: 90});
    });*/