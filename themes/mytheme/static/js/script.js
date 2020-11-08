
//trigger page transitions global navigation

 function pageDisplay(){
    //first load page fade in    
   
    document.querySelector('.main').style.opacity = 1;   
    document.querySelector('.main .container').style.opacity = 1;  
    //clearInterval(interval);
}



document.addEventListener("DOMContentLoaded", function(e){
       
        document.querySelector('.logo').classList.add('rotate');  
        document.querySelector('.main').style.opacity = 0;   
        document.querySelector('.main .container').style.opacity = 0;          
        document.querySelector('.main').style.transition = "opacity 1s ease-in-out 0.5s";    
        // document.querySelector('.logo').style.animation = "rotation 5s infinite linear";       
        // document.querySelector('.logo').style.animationPlayState = "running"; 
                
        let interval = setInterval(pageDisplay, 1500 );

        let els =  document.querySelectorAll('.nav-link');
        els.forEach((el)=>{
            el.addEventListener("click",function(e){
                document.querySelector('.logo').classList.remove('rotate');                  
                location.assign(e.target.href);            
                location.reload();   
             }) 
           
             
        });
    
});