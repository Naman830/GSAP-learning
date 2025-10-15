// function breakTheText() {
//   let h1 = document.querySelector("h1");
//   let h1Text = h1.textContent;

//   let splittedText = h1Text.split("");

//   let clutter = "";

//   splittedText.forEach(function (params) {
//     clutter += `<span>${params}</span>`;
//   });

//   h1.innerHTML = clutter;
// }

// breakTheText()

// Right to left
// gsap.from("h1 span",{
//     y: 100,
//     duration: 1,
//     opacity: 0.8,
//     delay: 0.5,
//     stagger: 0.15,
// })

// left to right
// gsap.from("h1 span",{
//     y: 100,
//     duration: 1,
//     opacity: 0.8,
//     delay: 0.5,
//     stagger: -0.15,
// })

// ============CENTER-==================================

function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splittedText = h1Text.split("");

  let halfValue = Math.floor(splittedText.length / 2);

  let clutter = ""

  splittedText.forEach(function (params, index) {
    if (index < halfValue) {
      clutter += `<span class="a">${params}</span>`
    } else {
      clutter += `<span class="b">${params}</span>`
    }
  });

  h1.innerHTML = clutter
}

breakTheText();

// Center
gsap.from("h1 .a", {
  y: 50,
  duration: 1,
  opacity: 0,
  delay: 0.6,
  stagger: 0.15,
});

gsap.from("h1 .b", {
   y: 50,
  duration: 1,
  opacity: 0,
  delay: 0.6,
  stagger: -0.15,
});