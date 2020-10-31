
//trigger page transitions global navigation

document.addEventListener("DOMContentLoaded", function(e){

    console.log("initial: " + location.href);
    //first load page fade in    
    document.querySelector('.main').style.transition = "opacity 1s ease-in-out 1s";
    document.querySelector('.main').style.opacity = 0;  
  
    console.log("page loaded -opacity 0" )


        var interval = setInterval(()=>{
            console.log("page load set opacity back 1 ")                                                                  
            document.querySelector('.main').style.transition = "opacity 1s ease-in-out 1s";
            document.querySelector('.main').style.opacity = 1;   
            document.querySelector('.conatiner .main').style.opacity = 1;   
            clearInterval(interval);             
        }, 500 );


        let els =  document.querySelectorAll('.nav-link');
        els.forEach((el)=>{
            //on click reset loaction
            el.addEventListener("click",function(e){  
                location.assign(e.target.href);
                location.reload();   
            })

        });
      
    
});