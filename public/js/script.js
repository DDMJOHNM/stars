
//trigger page transitions global navigation

document.addEventListener("DOMContentLoaded", function(e){

        //    console.log("1");
        //    console.log(document.querySelector('.main'));
        //    document.querySelector('.main').style.transition = "opacity 1s ease-in-out 2s";
        //     document.querySelector('.main').style.opacity = 1;   

        
            let els =  document.querySelectorAll('.nav-link');
            els.forEach((el)=>{
                
                el.addEventListener("click",function(e){  
                   // e.preventDefault()
               
                    // if(document.querySelector('main').style.opacity == 1){       console.log("2"); 
                    //     document.querySelector('.main').style.transition = "opacity 1s ease-in-out 1s";
                    //     document.querySelector('.main').style.opacity = 0;                        
                    //     console.log(e.target.href)
                    //     window.location.href === e.target.href;
                    //     console.log(e.target.href)
                    //     location.reload()   
                    // } 

                //     setInterval(()=>{
                //         console.log("3");
                //         if(document.querySelector('.main').style.opacity == 0){    
                //         document.querySelector('.main').style.transition = "opacity 1s ease-in-out 1s";
                //         document.querySelector('.main').style.opacity = 1;                        
                //         console.log(e.target.href)
                //         window.location.href === e.target.href;
                //         console.log(e.target.href)
                //         location.reload()   
                //     } 
                // },1000);
              
          })

    });
      
    
});