
document.addEventListener("DOMContentLoaded", function(){
        const menu = document.querySelector(".menu");
        const open_menu = document.querySelector(".open-menu");
        const close_menu = document.querySelector(".close-menu");
        const masajes = document.getElementById("massage");
        const primerboton = document.getElementById("b1");
        const reflex = document.getElementById("reflex");
        const segundoboton = document.getElementById("b2");
        const talle = document.getElementById("talle");
        const tercerboton = document.getElementById("b3");
        const ivana = document.getElementById("ivana");
        const cuartoboton = document.getElementById("b4");
        
        const section3 = document.querySelector(".section3");
        const anima = document.querySelector(".anima");

        const salud = document.querySelector(".salud");
        const health = document.querySelector(".health");
        const mente = document.querySelector(".mente");
        const buda = document.querySelector(".buda");
        const nutri = document.querySelector(".nutri");
        const food = document.querySelector(".food");
        const belle = document.querySelector(".belle");
        const beauty = document.querySelector(".beauty")

        const pp = document.querySelector(".pp");
        const sp = document.querySelector(".sp");
        const tp = document.querySelector(".tp");
        const cp = document.querySelector(".cp");

        const arrow1 = document.querySelector(".arrow1");
        const arrow2 = document.querySelector(".arrow2");
  
        const section1 = document.querySelector(".section-1");
        const section5 = document.querySelector(".imgsec5");
        const sectionhide = document.querySelector(".ocultar");
       

       

    section3.style.backgroundImage = "url('images/stone.jpg')";
 


function myFunction(x) {
    if (x.matches) { // If media query matches
        arrow1.style.opacity= "1";
        arrow2.style.opacity= "1";
        section1.style.animation = "none";
        menu.style.opacity = "0";
        sectionhide.style.display = "none";
        primerboton.style.display = "block";
        segundoboton.style.display = "block";
        tercerboton.style.display = "block";
        cuartoboton.style.display = "block";
        open_menu.addEventListener("click", function(){
            menu.style.opacity = "1";
            menu.style.pointerEvents = "all";     
        })
        close_menu.addEventListener("click", function(){
            menu.style.opacity = "0";
            menu.style.pointerEvents = "none";  
    
        })
         let number = 0;
        arrow2.addEventListener("click", function(){
          if(number == 0){
            section5.style.backgroundImage = "url(images/spa.jpg)";
            document.querySelector(".p1").innerHTML = "Se brindan una variedad de masajes terapéuticos, tratamientos de belleza y terapias de bienestar según su necesidad y preferencia.";
            number = 1;
          }
          else if(number == 1) {
            section5.style.backgroundImage = "url(images/pool.jpg)";
            document.querySelector(".p1").innerHTML = "Sumérjase y disfrute de un refrescante baño en una de las piscinas. También hay climatizadas para cuando las temperaturas empiecen a bajar. ";
            number = 2;

          }
          else if(number ==2){
            section5.style.backgroundImage = "url(images/medi.jpg)";
            document.querySelector(".p1").innerHTML = "Viva un momento más saludable, feliz y relajado en tan solo unos minutos con nuestras meditaciones grupales guiadas.";
            number = 3;

          }
          else if(number ==3){
            section5.style.backgroundImage = "url(images/location.jpg)";
            document.querySelector(".p1").innerHTML = "Nuestros servicios de bienestar ofrecen las mejores experiencias transformadoras que se pueden encontrar en Bariloche.";
            number = 0;


        }})
        arrow1.addEventListener("click", function(){
          if(number == 0){
            section5.style.backgroundImage = "url(images/medi.jpg)";
            document.querySelector(".p1").innerHTML = "Viva un momento más saludable, feliz y relajado en tan solo unos minutos con nuestras meditaciones grupales guiadas.";
            number = 3;
          }
          else if(number == 3){
            section5.style.backgroundImage = "url(images/pool.jpg)";
            document.querySelector(".p1").innerHTML = "Sumérjase y disfrute de un refrescante baño en una de las piscinas. También hay climatizadas para cuando las temperaturas empiecen a bajar. ";
            number = 2;

          }
          else if(number == 2){
            section5.style.backgroundImage = "url(images/spa.jpg)";
            document.querySelector(".p1").innerHTML = "Se brindan una variedad de masajes terapéuticos, tratamientos de belleza y terapias de bienestar según su necesidad y preferencia.";
            number = 1;
          }
          else if(number == 1){
            section5.style.backgroundImage = "url(images/location.jpg)";
            document.querySelector(".p1").innerHTML = "Nuestros servicios de bienestar ofrecen las mejores experiencias transformadoras que se pueden encontrar en Bariloche.";
            number = 0;
          }
          

          
        

        })


 

        
  
  salud.addEventListener("click", function(){
    
    section3.style.backgroundImage = "url('images/salu.jpg')";
  
    
  
    
    
   
     
   })
 
   salud.addEventListener("click", function(){
      buda.style.opacity= "0"
      beauty.style.opacity = "0";
      health.style.opacity = "1";
      pp.style.opacity = "1";
      sp.style.opacity = "0.2";
      tp.style.opacity = "0.2";
      cp.style.opacity = "0.2";
      food.style.opacity = "0";
    
    
 
   })

   mente.addEventListener("click", function(){
     section3.style.backgroundImage = "url('images/meditac.jpg')";
     
   })
 
   mente.addEventListener("click", function(){
    health.style.opacity = "0";
    food.style.opacity = "0";
    buda.style.opacity = "1";
     sp.style.opacity = "1";
     pp.style.opacity = "0.2";
     tp.style.opacity = "0.2";
     cp.style.opacity = "0.2";
     beauty.style.opacity = "0";
   })

 
   nutri.addEventListener("click", function(){
     section3.style.backgroundImage = "url('images/food.jpg')";
   })
 
   nutri.addEventListener("click", function(){
    health.style.opacity = "0";
    buda.style.opacity = "0"
    food.style.opacity = "1";
     tp.style.opacity = "1"
     pp.style.opacity = "0.2";
     sp.style.opacity = "0.2";
     cp.style.opacity = "0.2";
     beauty.style.opacity = "0";
   })

 
   belle.addEventListener("click", function(){
     section3.style.backgroundImage = "url('images/stone.jpg')";
   })
 
   belle.addEventListener("click", function(){
    health.style.opacity = "0";
    buda.style.opacity = "0"
    food.style.opacity = "0";
    beauty.style.opacity = "1";
     cp.style.opacity = "1";
     pp.style.opacity = "0.2";
     sp.style.opacity = "0.2";
     tp.style.opacity = "0.2";
   })
   
    } else {
      sectionhide.style.display = "block";
      menu.style.opacity = "1";
      menu.style.pointerEvents = "all";
         primerboton.style.display = "none";
        segundoboton.style.display = "none";
        tercerboton.style.display = "none";
        cuartoboton.style.display = "none";
        section1.style.animation = "sec1 30s infinite";
        arrow1.style.display = "none";
        arrow2.style.display = "none";
        salud.addEventListener("mouseover", function(){
          section3.style.backgroundImage = "url('images/salu.jpg')";
           
           
         })
       
         salud.addEventListener("mouseover", function(){
           health.style.opacity = "1";
           pp.style.opacity = "1";
           sp.style.opacity = "0.2";
           tp.style.opacity = "0.2";
           cp.style.opacity = "0.2";
       
         })
         salud.addEventListener("mouseleave", function(){
           health.style.opacity = "0";
           pp.style.opacity = "0.2";
           sp.style.opacity = "0.2";
           tp.style.opacity = "0.2";
           cp.style.opacity = "0.2";
         })
         mente.addEventListener("mouseover", function(){
           section3.style.backgroundImage = "url('images/meditac.jpg')";
         })
       
         mente.addEventListener("mouseover", function(){
           buda.style.opacity = "1";
           sp.style.opacity = "1";
           pp.style.opacity = "0.2";
           tp.style.opacity = "0.2";
           cp.style.opacity = "0.2";;
         })
         mente.addEventListener("mouseleave", function(){
           buda.style.opacity = "0";
           sp.style.opacity = "0.2";
           pp.style.opacity = "0.2";
           tp.style.opacity = "0.2";
           cp.style.opacity = "0.2";;
         })
       
         nutri.addEventListener("mouseover", function(){
           section3.style.backgroundImage = "url('images/food.jpg')";
         })
       
         nutri.addEventListener("mouseover", function(){
           food.style.opacity = "1";
           tp.style.opacity = "1"
           pp.style.opacity = "0.2";
           sp.style.opacity = "0.2";
           cp.style.opacity = "0.2";;
         })
         nutri.addEventListener("mouseleave", function(){
           food.style.opacity = "0";
           tp.style.opacity = "0.2";
           pp.style.opacity = "0.2";
           sp.style.opacity = "0.2";
           cp.style.opacity = "0.2";;
         })
       
       
         belle.addEventListener("mouseover", function(){
           section3.style.backgroundImage = "url('images/stone.jpg')";
         })
       
         belle.addEventListener("mouseover", function(){
           beauty.style.opacity = "1";
           cp.style.opacity = "1";
           pp.style.opacity = "0.2";
           sp.style.opacity = "0.2";
           tp.style.opacity = "0.2";
         })
         belle.addEventListener("mouseleave", function(){
           beauty.style.opacity = "0";
           cp.style.opacity = "0.2";
           pp.style.opacity = "0.2";
           sp.style.opacity = "0.2";
           tp.style.opacity = "0.2";
         })
        
      

     
     
        


    }
  }
  
  var x = window.matchMedia("(max-width: 750px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
 
 
 
 

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".topheader").style.opacity = "1";
      document.querySelector(".topheader").style.pointerEvents= "all";
      
      
    } else {
      document.querySelector(".topheader").style.opacity = "0";
      document.querySelector(".topheader").style.pointerEvents= "none";
      
    }
    prevScrollpos = currentScrollPos;
  }
  
  const foto = document.querySelector(".imgsec5");
  const loca = document.querySelector(".loca");
  const spa = document.querySelector(".spa");
  const pile = document.querySelector(".pile");
  const medi = document.querySelector(".medi");
  const img1 = document.querySelector(".img1")
  const img2 = document.querySelector(".img2")
  const img3 = document.querySelector(".img3")
  const img4 = document.querySelector(".img4")

  spa.addEventListener("mouseover", function(){
    foto.style.backgroundImage = "url(images/spa.jpg)";
    loca.style.opacity = "0.4";
    spa.style.opacity = "1";
    pile.style.opacity = "0.4";
    medi.style.opacity = "0.4";
    img1.style.opacity = "0";
    img2.style.opacity = "1";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
    document.querySelector(".p1").innerHTML = "Se brindan una variedad de masajes terapéuticos, tratamientos de belleza y terapias de bienestar según su necesidad y preferencia.";
  })
  loca.addEventListener("mouseover", function(){
    foto.style.backgroundImage = "url(images/location.jpg)";
    loca.style.opacity = "1";
    spa.style.opacity = "0.4";
    pile.style.opacity = "0.4";
    medi.style.opacity = "0.4";
    img1.style.opacity = "1";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
    document.querySelector(".p1").innerHTML = "Nuestros servicios de bienestar ofrecen las mejores experiencias transformadoras que se pueden encontrar en Bariloche.";

  })
  pile.addEventListener("mouseover", function(){
    foto.style.backgroundImage = "url(images/pool.jpg)";
    loca.style.opacity = "0.4";
    spa.style.opacity = "0.4";
    pile.style.opacity = "1";
    medi.style.opacity = "0.4";
    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "1";
    img4.style.opacity = "0";
    document.querySelector(".p1").innerHTML = "Sumérjase y disfrute de un refrescante baño en una de las piscinas. También hay piscinas climatizadas para cuando las temperaturas empiecen a bajar. ";

  })
  medi.addEventListener("mouseover", function(){
    foto.style.backgroundImage = "url(images/medi.jpg)";
    loca.style.opacity = "0.4";
    spa.style.opacity = "0.4";
    pile.style.opacity = "0.4";
    medi.style.opacity = "1";
    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
    img4.style.opacity = "1";
    document.querySelector(".p1").innerHTML = "Viva un momento más saludable, feliz y relajado en tan solo unos minutos con nuestras meditaciones grupales guiadas.";

  })

  

})
