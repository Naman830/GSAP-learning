window.addEventListener("wheel", (dets) => {
  const delta = dets.deltaY;
  const move = document.getElementById("move");
  const marque = document.getElementsByClassName("marque");

  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 2,
      ease: "none",
      repeat: -1
    });

    gsap.to(".marque img",{
      rotate: 180
    })
  } else {
    gsap.to("#move", {
      transform: "translateX(0%)",
      duration: 2,
      ease: "none",
      repeat: -1
    });

    gsap.to(".marque img",{
      rotate: 0
    })
  }
});
