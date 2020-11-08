
//trigger page transitions global navigation

 function pageDisplay(){
    //first load page fade in    
    document.querySelector('.main').style.transition = "opacity 1s ease-in-out 0.5s";
    document.querySelector('.main').style.opacity = 1;   
    document.querySelector('.main .container').style.opacity = 1;   
    //clearInterval(interval);
}



document.addEventListener("DOMContentLoaded", function(e){

        document.querySelector('.main').style.transition = "opacity 1s ease-in-out 0.5s";
        document.querySelector('.main').style.opacity = 0;   
        document.querySelector('.main .container').style.opacity = 0;   

        let interval = setInterval(pageDisplay, 200 );

        let els =  document.querySelectorAll('.nav-link');
        els.forEach((el)=>{
            el.addEventListener("click",function(e){  
            location.assign(e.target.href);
            location.reload();   
             })
        });
    
});