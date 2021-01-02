window.onload = function(){
    let changeBg = document.querySelector('.changeBgIcon');
    let mainBg = document.querySelector('body');
    let projectsItem = document.querySelectorAll('.main-block__projects-item');
    let profilePhoto = document.querySelector('.aside-content__profile-photo');
    let asideWrapper = document.querySelector('.aside-wrapper');
    profilePhoto.classList.add('profile-photo_active')  
    

    for(i=0;i<projectsItem.length;i++){
        projectsItem[i].onmouseover = handlerMouseBig;
        projectsItem[i].touchstart = handlerMouseBig;
        projectsItem[i].onmouseout = handlerMouseSmall; 
        projectsItem[i].touchend = handlerMouseSmall; 
        changeBg.onclick = activateDarkMode;
         
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
    function activateDarkMode(){
        mainBg.classList.toggle('dark_active');
        asideWrapper.classList.toggle('aside-wrapper_active')
        this.classList.toggle('dark_active');
        for(i=0;i<projectsItem.length;i++){
            projectsItem[i].classList.toggle('dark_active');
        }
    };

}

/*
    if (screen.width > 640) {
        $(".changeBgIcon").animate(
            {"right": "60px"}, "slow");
    }*/