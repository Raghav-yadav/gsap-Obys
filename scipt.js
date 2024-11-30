function loadingAnimation(){
    


 var tl = gsap.timeline()
 tl.from('.line h1',{
    y:100,
    stagger:0.2,
    duration:0.6,delay:0.5,
    
})
tl.from(".line1-part1,.line h2",{
    opacity:0,
    onStart:()=>{

        var h5timer = document.querySelector(".line1-part1 h5")
        var grow = 0
        
        setInterval(()=>{
            if(grow<100){
            
                h5timer.innerHTML = grow++;
            }else{
                h5timer.innerHTML = grow
            }
        },35)

    }
})

tl.to('.loader', {
    opacity: 0,
    duration: 0.2,
    delay: 4
});

tl.from('.page1', {
     delay:0.2,
    y:1600,
    ease:Power4,
        duration:0.6,
});

tl.to('.loader', {
    display: "none"
});
tl.from(".nav",{
    
})
tl.from('#hero1 h1, #hero2 h1, #hero3 h2, #hero3 h3,#hero4 h1',{
    y:120,
    stagger:0.2,

})
}
loadingAnimation()
  function cursorAnimation(){
    document.addEventListener("mousemove",(dets)=>{
        gsap.to('.crsr',{
            left:dets.x,
            top:dets.y
        })
        })
        
        Shery.makeMagnet('.navPart2 h4',{})
        

  }
  cursorAnimation()