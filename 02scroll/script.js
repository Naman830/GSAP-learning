// import { gsap } from "gsap";

gsap.to("#page2 h1", {
    transform: "translate(-100%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
        pin: true,
    }
})