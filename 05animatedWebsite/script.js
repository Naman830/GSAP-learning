function page1Animation() {
var tl = gsap.timeline()


tl.from(".logo, nav a, nav button", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 0.4,
    stagger: 0.15
})

tl.from(".hero-content",{
    x: -200,
    opacity: 0,
    duration: 0.5
})

tl.from(".hero-content p",{
    x: -100,
    opacity: 0,
    duration: 0.4
})

tl.from(".hero-content button",{
    opacity: 0,
    duration: 0.4
})

tl.from(".hero-image", {
    opacity: 0,
    duration: 0.5
}, "-=0.4")

// this -=1 is timline delay which means to start it first 


tl.from(".client-logo", {
    opacity: 0,
    y: 30,
    stagger: 0.16,
    duration: 0.6
})
}
function page2Animation() {
    
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 70%",
        end: "top 0",
        scrub: 2
      }
    });

    tl2.from(".services-head", {
      y: 30,
      opacity: 0,
      duration: 1
    });

    tl2.from("#top-cards",{
        x: -300,
        opacity: 0,
        duration: 0.5,
    },"anime")


    tl2.from("#down-cards",{
        x: 300,
        opacity: 0,
        duration: 0.5,
    },"anime")

    // YOU CAN GIVE ANY VALUE ON anime BUT YOU HAVE TO GIVE SAME TO GET ANIMATION EQUAL TO BOTH 
}

page1Animation()
page2Animation()
