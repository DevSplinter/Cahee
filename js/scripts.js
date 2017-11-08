    var header = document.querySelector(".header__container");
    var headerLogo = document.querySelector(".header__logo");
    var buttonMenu = document.querySelectorAll(".navigation__item");
    var sectionPosition = document.querySelectorAll("section");
    var navButton = document.querySelector(".navigation__button");
    var navigation = document.querySelector(".navigation");

    function smoothScroll(e){
        goToSection = document.querySelector("#"+e.target.text);

        if (e.target.text != undefined){
            e.preventDefault();
            e.stopPropagation();
             animate(e);
            
       
         }
    }

   
    
     function animate(e){
    
        if( self.pageYOffset != goToSection.offsetTop ){
               
                if( Math.round(self.pageYOffset) >= Math.round(goToSection.offsetTop) ){
                    
                   var slowDown = Math.round(self.pageYOffset) - Math.round(goToSection.offsetTop);
                    if(slowDown < 40 && slowDown != 0 ){
                        window.scrollBy(0, -1);
                    setTimeout(animate, 2);   
                    }else if( slowDown != 0 ){
                    window.scrollBy(0, -30);
                    setTimeout(animate, 5);
                }
                }else if( Math.round(self.pageYOffset) <= Math.round(goToSection.offsetTop) ){
                 
                    slowDown = Math.round(goToSection.offsetTop) - Math.round(self.pageYOffset);
                    if(slowDown < 40 && slowDown != 0 ){
                        window.scrollBy(0, 1);
                    setTimeout(animate, 2);   
                    }else if( slowDown != 0 ){
                    window.scrollBy(0, 30);
                    setTimeout(animate, 5);
                }
                
                };
    }
}

function toggleClass(){
   if(navButton.classList.contains("navigation__button--cross")){
        navButton.classList.toggle("navigation__button--hamburger");
        navButton.classList.toggle("navigation__button--cross");
        navButton.innerHTML = "&#9776;";
        navigation.classList.remove("showMenu");
        
    }else{
        navButton.classList.toggle("navigation__button--hamburger");
        navButton.classList.toggle("navigation__button--cross");
        navButton.innerHTML = "&#735;";
        navigation.classList.add("showMenu");
    }
}


    
    //sticky menu
    
        window.addEventListener("scroll", function(e){
            if(document.body.scrollTop || window.pageYOffset > 100){
                header.classList.add("header--fixed");
                headerLogo.classList.add("header__logo--fixed");
                
            }else{
                header.classList.remove("header--fixed");
                headerLogo.classList.remove("header__logo--fixed");
            }
        }, false);
    
    //#####################


//smooth scroll

    for(var i = 0; i<buttonMenu.length; i++){
    buttonMenu[i].addEventListener("click", function(e){
       smoothScroll(e);
        toggleClass();
        }
     ,false);
    }
    
//#######################


//select menu item

window.addEventListener("scroll", function(){
    for(var i = 0; i < sectionPosition.length; i++){
        
    if(sectionPosition[i].offsetTop <= this.pageYOffset){
        buttonMenu[i].classList.add("selected");
        if(buttonMenu[i].previousElementSibling){
            buttonMenu[i].previousElementSibling.classList.remove("selected");
        }
    }else if(sectionPosition[i].offsetTop >= this.pageYOffset){
        buttonMenu[i].classList.remove("selected");
    }
}
},false);

navButton.addEventListener("click", function(){
       toggleClass();
}, false);

