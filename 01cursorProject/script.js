let main = document.getElementById("main");
let cursor = document.getElementById("cursor");
let imageDiv = document.getElementById("image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.1,
    ease: "back.out ",
  });
});

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "view more"
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#ffffff8a"
    })
})

imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"
    })
})