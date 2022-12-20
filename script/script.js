function headClick() {
    var navMenu = document.getElementsByClassName("nav")[0];
    var arrowRotate = document.getElementsByClassName("arrow")[0];
    

    if (navMenu.style.display == "block") {
        navMenu.style.display = "none";
        arrowRotate.style.transform = "rotate(-360deg)";
    }
    else {
        navMenu.style.display = "block";
        arrowRotate.style.transform = "rotate(-180deg)";
    }

}

function slideMove(index){
    var navMenu = document.getElementsByClassName("nav")[0];
    var slider= navMenu.children[0];
    var menus = navMenu.children[index];
    slider.style.top=navMenu.children[index].offsetTop+"px";
     
    
        
    
    
    


}