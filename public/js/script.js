
//trigger page transitions global navigation

document.addEventListener("DOMContentLoaded", function(e){

    console.log("initial: " + location.href);
    //first load page fade in    
    document.querySelector('.main').style.transition = "opacity 1s ease-in-out 0.5s";
            document.querySelector('.main').style.opacity = 1;   
            document.querySelector('.conatiner .main').style.opacity = 1;   
            clearInterval(interval);             
        }, 200 );


        let els =  document.querySelectorAll('.nav-link');
        els.forEach((el)=>{
            //on click reset loaction
            el.addEventListener("click",function(e){  
                location.assign(e.target.href);
                location.reload();   
            })

        });
      
    
});